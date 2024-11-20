# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


class Offer:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name

    def check(self):
        try:
            response = self.http.post(
                url="api/v1/offer/check",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(
                f"<r>🔴 Error getting user info (<c>{self.account_name}</c>): {e}</r>"
            )
            return None
