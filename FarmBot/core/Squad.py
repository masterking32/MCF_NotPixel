# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot

import json
import random
from mcf_utils.utils import extract_tg_query_from_url


class Squad:
    def __init__(self, log, httpRequest, account_name, tgAccount=None):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.tgAccount = tgAccount
        self.tg_web_query = None
        self.accessToken = None
        self.telegram_id = None

    async def join_squad(self):
        try:
            self.log.info(f"<g>🔵 Joining squad for <c>{self.account_name}</c>...</g>")
            if self.tgAccount is None:
                return

            tgAccount = self.tgAccount
            tgAccount.BotID = "notgames_bot"
            tgAccount.NewStart = False
            tgAccount.ReferralToken = ""
            tgAccount.ShortAppName = "squads"
            tgAccount.AppURL = None

            web_data = await tgAccount.run()
            if web_data is None:
                return

            self.tg_web_query = extract_tg_query_from_url(web_data)
            if self.tg_web_query is None:
                self.log.info(
                    f"<y>⚠️ Unable to get web query for <c>{self.account_name}</c></y>"
                )
                return

            self.log.info(
                f"<g>🔐 Logging in for <c>{self.account_name}</c> to notgames bot!</g>"
            )

            response = self.login()
            if response is None or "data" not in response:
                self.log.info(
                    f"<y>⚠️ Unable to login for <c>{self.account_name}</c></y>"
                )
                return False

            self.accessToken = response["data"]["accessToken"]
            self.telegram_id = response["data"]["telegramId"]
            squads = self.get_squads()
            if squads is None or "data" not in squads:
                return False

            squads = squads["data"]["squads"]

            if len(squads) == 0:
                self.log.info(
                    f"<y>⚠️ No squads available for <c>{self.account_name}</c></y>"
                )
                return False

            profile = self.get_profile()
            squad = random.choice(squads[:5])
            self.log.info(
                f"<g>🌟 Joining squad <c>{squad['name']}</c> for <c>{self.account_name}</c>...</g>"
            )

            squad_id = squad["id"]
            squad_info = self.get_squad(squad_id)
            if squad_info is None or "data" not in squad_info:
                self.log.info(
                    f"<y>⚠️ Unable to get squad info for <c>{self.account_name}</c></y>"
                )
                return False

            squad_chat_id = squad_info["data"]["squad"]["chatId"]
            squad_slug = squad_info["data"]["squad"]["slug"]
            response = self.join_squad_request(squad_slug, squad_chat_id)
            if response is None:
                self.log.info(
                    f"<y>⚠️ Unable to join squad for <c>{self.account_name}</c></y>"
                )
                return False
            self.log.info(f"<g>✅ Squad joined for <c>{self.account_name}</c></g>")

            return True
        except Exception as e:
            self.log.error(
                f"<r>🔴 Error joining squad (<c>{self.account_name}</c>): {e}</r>"
            )
            return False

    def login(self):
        try:
            headers = {
                "Content-Type": "application/json",
                "origin": "https://webapp.notcoin.tg",
                "referer": "https://webapp.notcoin.tg/",
                "x-auth-token": "Bearer null",
            }

            response = self.http.post(
                url="https://api.notcoin.tg/auth/login",
                auth_header=False,
                headers=headers,
                data=json.dumps(
                    {
                        "webAppData": self.tg_web_query,
                    }
                ),
                valid_response_code=201,
                valid_option_response_code=204,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(
                f"<r>🔴 Error getting user info (<c>{self.account_name}</c>): {e}</r>"
            )
            return None

    def get_squads(self):
        try:
            response = self.http.get(
                url="https://api.notcoin.tg/squads?sort=hot",
                headers={
                    "Content-Type": "application/json",
                    "origin": "https://webapp.notcoin.tg",
                    "referer": "https://webapp.notcoin.tg/",
                    "x-auth-token": f"Bearer {self.accessToken}",
                },
                auth_header=False,
                valid_response_code=200,
                valid_option_response_code=204,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(
                f"<r>🔴 Error getting squads (<c>{self.account_name}</c>): {e}</r>"
            )
            return None

    def get_profile(self):
        try:
            response = self.http.get(
                url=f"https://api.notcoin.tg/profiles/by/telegram_id/{self.telegram_id}",
                headers={
                    "Content-Type": "application/json",
                    "origin": "https://webapp.notcoin.tg",
                    "referer": "https://webapp.notcoin.tg/",
                    "x-auth-token": f"Bearer {self.accessToken}",
                },
                auth_header=False,
                valid_response_code=200,
                valid_option_response_code=204,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(
                f"<r>🔴 Error getting user info (<c>{self.account_name}</c>): {e}</r>"
            )
            return None

    def get_squad(self, squad_id):
        try:
            response = self.http.get(
                url=f"https://api.notcoin.tg/squads/by/id/{squad_id}",
                headers={
                    "Content-Type": "application/json",
                    "origin": "https://webapp.notcoin.tg",
                    "referer": "https://webapp.notcoin.tg/",
                    "x-auth-token": f"Bearer {self.accessToken}",
                },
                auth_header=False,
                valid_response_code=200,
                valid_option_response_code=204,
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(
                f"<r>🔴 Error getting squads (<c>{self.account_name}</c>): {e}</r>"
            )
            return None

    def join_squad_request(self, slug, chat_id):
        try:
            response = self.http.post(
                url=f"https://api.notcoin.tg/squads/{slug}/join",
                headers={
                    "Content-Type": "application/json",
                    "origin": "https://webapp.notcoin.tg",
                    "referer": "https://webapp.notcoin.tg/",
                    "x-auth-token": f"Bearer {self.accessToken}",
                },
                auth_header=False,
                valid_response_code=201,
                valid_option_response_code=204,
                data=json.dumps(
                    {
                        "chatId": chat_id,
                    }
                ),
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(
                f"<r>🔴 Error getting squads (<c>{self.account_name}</c>): {e}</r>"
            )
            return None
