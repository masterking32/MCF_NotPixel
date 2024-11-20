# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot

from random import random
import time
import urllib.parse


class Auth:
    def __init__(self, log, httpRequest, account_name, tgWebData, start_param):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.tgWebData = tgWebData
        self.start_param = start_param

    def login(self):
        try:
            self.log.info(
                f"<g>🔄 Attempting to log in to account: <c>{self.account_name}</c>...</g>"
            )
            main_response, main_headers = self.main_page_load()

            self.http.authToken = f"initData {self.tgWebData}"

            self.log.info(
                f"<g>✅ Successfully logged in to account: <c>{self.account_name}</c>!</g>"
            )
        except Exception as e:
            self.log.error(f"<r>🔴 Error login (<c>{self.account_name}</c>): {e}</r>")
            return None, None

    def main_page_load(self, reties=3):
        if reties == 0:
            return False, False

        try:
            tgWebData = urllib.parse.quote_plus(self.tgWebData)

            url = f"{self.start_param}#tgWebAppData={tgWebData}&tgWebAppVersion=7.10&tgWebAppPlatform=android&tgWebAppSideMenuUnavail=1"

            response, headers = self.http.get(
                url=url,
                domain="app",
                send_option_request=False,
                auth_header=False,
                display_errors=False,
                return_headers=True,
                only_json_response=False,
            )

            if response is None:
                if self.start_param != "":
                    self.log.error(
                        f"<y>🟡 <c>{self.account_name}</c> failed to load the main page, retrying</y>"
                    )
                    time.sleep(random.randint(5, 10))
                    return self.main_page_load(reties=reties - 1)
                self.log.info(
                    f"<y>🟡 <c>{self.account_name}</c> failed to load the main page, but it's okay!</y>"
                )
                return False, False

            self.log.info(
                f"<g>🟢 <c>{self.account_name}</c> loaded the main page successfully!</g>"
            )

            return response, headers

        except Exception as e:
            self.log.error(
                f"<r>🔴 Error main_page_load (<c>{self.account_name}</c>): {e}</r>"
            )
            return False, False
