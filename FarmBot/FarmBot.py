# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot
import random
import sys
import os
import time

from .core.HttpRequest import HttpRequest
from .core.Auth import Auth
from .core.Users import Users
from .core.Mining import Mining
from .core.Buy import Buy
from .core.Tasks import Tasks
from .core.Repaint import Repaint
from .core.Upgrades import Upgrades
from .core.Squad import Squad
from .core.Offer import Offer
from .core.Secrets import Secrets

from utilities.utilities import getConfig

MasterCryptoFarmBot_Dir = os.path.dirname(
    os.path.dirname(os.path.abspath(__file__ + "/../../"))
)
sys.path.append(MasterCryptoFarmBot_Dir)


class FarmBot:
    def __init__(
        self,
        log,
        bot_globals,
        account_name,
        web_app_query,
        proxy=None,
        user_agent=None,
        isPyrogram=False,
        tgAccount=None,
    ):
        self.log = log
        self.bot_globals = bot_globals
        self.account_name = account_name
        self.web_app_query = web_app_query
        self.proxy = proxy
        self.user_agent = user_agent
        self.isPyrogram = isPyrogram
        self.tgAccount = tgAccount

    async def run(self):
        self.log.info(
            f"<g>🤖 Starting NotPixel farming for account <cyan>{self.account_name}</cyan>...</g>"
        )

        try:
            self.http = HttpRequest(
                log=self.log,
                proxy=self.proxy,
                user_agent=self.user_agent,
                tgWebData=self.web_app_query,
                account_name=self.account_name,
            )

            license_key = self.bot_globals.get("license", None)

            tasks = Tasks(
                log=self.log,
                httpRequest=self.http,
                account_name=self.account_name,
                license_key=license_key,
                tgAccount=self.tgAccount,
            )

            tasks.get_api_tasks_list()

            start_param = ""
            if (
                self.isPyrogram
                and self.tgAccount is not None
                and self.tgAccount.NewStart
            ):
                start_param = f"?tgWebAppStartParam={self.tgAccount.ReferralToken}"

            auth = Auth(
                log=self.log,
                httpRequest=self.http,
                account_name=self.account_name,
                tgWebData=self.web_app_query,
                start_param=start_param,
            )

            auth.login()
            return

            users = Users(
                log=self.log,
                httpRequest=self.http,
                account_name=self.account_name,
            )

            me = users.get_me()
            if me is None:
                self.log.error(
                    f"<r>⭕ Error getting user info (<c>{self.account_name}</c>)</r>"
                )
                return

            if me["websocketToken"] is None or me["websocketToken"] == "":
                self.log.warning(
                    f"<y>🟡 Account <c>{self.account_name}</c> encountered issues, possibly flagged as a bot by NotPixel.</y>"
                )

            me_id = me.get("id", 0)
            if me_id == 0:
                self.log.info(
                    f"<g>🆕 Account <c>{self.account_name}</c> is not registered and this is new!</g>"
                )

            time.sleep(2)

            mining = Mining(
                log=self.log,
                httpRequest=self.http,
                account_name=self.account_name,
            )

            status = mining.get_status()
            if status is None:
                self.log.error(
                    f"<r>⭕ Error getting mining status (<c>{self.account_name}</c>)</r>"
                )
                return

            offer = Offer(
                log=self.log,
                httpRequest=self.http,
                account_name=self.account_name,
            )

            # offer_check = offer.check()

            status_user_balance = status.get("userBalance", 0)
            status_speed_per_second = status.get("speedPerSecond", 0)
            status_from_start = status.get("fromStart", 0)
            status_max_mining_time = status.get("maxMiningTime", 28800)
            status_claimed = status.get("claimed", 0)
            status_boosts = status.get("boosts", {})
            status_repaints_total = status.get("repaintsTotal", 0)
            status_league = status.get("league", 0)
            status_charges = status.get("charges", 0)
            status_max_charges = status.get("maxCharges", 0)

            ready_to_claims = status_speed_per_second * status_from_start

            ready_to_claims_round = round(ready_to_claims, 5)
            self.log.info(f"<g>🔆 Account <c>{self.account_name}</c> info:</g>")
            self.log.info(f"<g>└─ 💰 User Balance: <c>{status_user_balance} ⏹️</c></g>")
            self.log.info(
                f"<g>└─ 🎁 Ready to claim: <c>{ready_to_claims_round} ⏹️</c></g>"
            )
            self.log.info(f"<g>└─ 🏆 League: <c>{status_league}</c></g>")
            self.log.info(
                f"<g>└─ 🎨 Repaints Total: <c>{status_repaints_total}</c></g>"
            )
            self.log.info(
                f"<g>└─ 🔋 Charges: <c>{status_charges}/{status_max_charges}</c></g>"
            )

            secrets = Secrets(
                log=self.log,
                httpRequest=self.http,
                account_name=self.account_name,
                status=status,
                license_key=license_key,
            )

            repaint = Repaint(
                log=self.log,
                httpRequest=self.http,
                account_name=self.account_name,
                license_key=license_key,
            )

            priods = repaint.get_tournament_priods()

            if getConfig("auto_finish_secret_mission", True):
                secrets.finish_secret_mission()

            buy = Buy(
                log=self.log,
                httpRequest=self.http,
                account_name=self.account_name,
            )

            # buy.get_list()

            time.sleep(2)
            if ready_to_claims > 0 and status_from_start > 60:
                if getConfig("auto_claim", True):
                    mining.claim()
                    self.log.info(
                        f"<g>🎉 Account <c>{self.account_name}</c> has successfully claimed <c>{ready_to_claims_round} ⏹️</c></g>"
                    )
                    time.sleep(2)
                else:
                    self.log.info(f"<y>🟡 Auto-claim is disabled</y>")
            else:
                self.log.info(
                    f"<y>⏳ Account <c>{self.account_name}</c> is not ready to claim yet</y>"
                )

            if getConfig("auto_finish_tasks", True):
                await tasks.claim_tasks(status)
            else:
                self.log.info(f"<y>🟡 Auto-finish tasks is disabled</y>")

            # status_halloween = status.get("goods", {}).get("7", 0)
            # if status_halloween > 0:
            #     repaint.do_halloween_repaint(charges=status_halloween)
            #     self.log.info(
            #         f"<g>🎃 Account <c>{self.account_name}</c> has successfully repainted <c>{status_halloween} 🪫</c> for Halloween</g>"
            #     )

            if getConfig("auto_repaint", True):
                if status_charges > 0:
                    # await repaint.do_repaint(charges=status_charges)
                    if (
                        priods is not None
                        and "activePeriod" in priods
                        and "PeriodType" in priods["activePeriod"]
                    ):
                        if (
                            priods["activePeriod"]["PeriodType"] == "round"
                            and "RoundID" in priods["activePeriod"]
                            and priods["activePeriod"].get("RoundID", 0) > 0
                        ):
                            round_id = priods["activePeriod"].get("RoundID", 0)
                            self.log.info(
                                f"<g>🎯 Account <c>{self.account_name}</c> is in a round <c>{round_id}</c></g>"
                            )

                            await repaint.do_tournament(
                                charges=status_charges,
                                round_id=round_id,
                                is_break=False,
                            )
                        elif priods["activePeriod"]["PeriodType"] == "break":
                            self.log.info(
                                f"<g>🎨 Account <c>{self.account_name}</c> is in a tournament break</g>"
                            )

                            await repaint.do_tournament(
                                charges=status_charges,
                                round_id=0,
                                is_break=True,
                            )
                        else:
                            self.log.info(
                                f"<g>🎨 Account <c>{self.account_name}</c> is not in a tournament 2</g>"
                            )
                    else:
                        self.log.info(
                            f"<g>🎨 Account <c>{self.account_name}</c> is not in a tournament</g>"
                        )

                else:
                    self.log.info(
                        f"<y>🪫 Account <c>{self.account_name}</c> doesn't have any charges left</y>"
                    )
            else:
                self.log.info(f"<y>🟡 Auto-repaint is disabled</y>")

            status = mining.get_status()
            if status is None:
                self.log.error(
                    f"<r>⭕ Error getting mining status (<c>{self.account_name}</c>)</r>"
                )
                return

            status_user_balance = status.get("userBalance", 0)
            self.log.info(
                f"<g>💰 Account <c>{self.account_name}</c> has a balance of <c>{status_user_balance} ⏹️</c>.</g>"
            )

            upgrades = Upgrades(
                log=self.log,
                httpRequest=self.http,
                account_name=self.account_name,
            )

            if getConfig("auto_upgrade_energy_limit", True):
                status_user_balance = await upgrades.upgrade(
                    "energyLimit",
                    status_user_balance,
                    status.get("boosts", {}).get("energyLimit", 4),
                )

            if getConfig("auto_upgrade_paint_reward", True):
                status_user_balance = await upgrades.upgrade(
                    "paintReward",
                    status_user_balance,
                    status.get("boosts", {}).get("paintReward", 1),
                )

            if getConfig("auto_upgrade_recharge_speed", True):
                status_user_balance = await upgrades.upgrade(
                    "reChargeSpeed",
                    status_user_balance,
                    status.get("boosts", {}).get("reChargeSpeed", 1),
                )

            squad = me.get("squad", None)
            if squad is None:
                squad = {}

            squad_id = squad.get("id", 0)

            if squad_id is not None and squad_id > 0:
                self.log.info(
                    f"<g>👥 Account <c>{self.account_name}</c> is in squad <c>{squad_id}</c></g>"
                )
            elif getConfig("auto_join_squad", True):
                squad = Squad(
                    log=self.log,
                    httpRequest=self.http,
                    account_name=self.account_name,
                    tgAccount=self.tgAccount,
                )
                await squad.join_squad()

            self.log.info(
                f"<g>🤖 NotPixel farming for account <cyan>{self.account_name}</cyan> has finished</g>"
            )

        except Exception as e:
            self.log.error(f"<r>🔴 Error: {e}</r>")
            return

        finally:
            delay_between_accounts = getConfig("delay_between_accounts", 60)
            random_sleep = random.randint(0, 20) + delay_between_accounts
            self.log.info(
                f"<g>⌛ Farming for <c>{self.account_name}</c> completed. Waiting for <c>{random_sleep}</c> seconds before running the next account...</g>"
            )
            time.sleep(random_sleep)
