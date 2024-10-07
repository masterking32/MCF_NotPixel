# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot
import sys
import os
import time

from .core.HttpRequest import HttpRequest
from .core.Auth import Auth
from .core.Users import Users

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

            me_id = me.get("id")
            if me_id == 0:
                self.log.info(
                    f"<g>🆕 Account <c>{self.account_name}</c> is not registered and this is new!</g>"
                )

            time.sleep(2)

        except Exception as e:
            self.log.error(f"<r>🔴 Error: {e}</r>")
            return
