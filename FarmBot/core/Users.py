# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


from utilities.utilities import getConfig


class Users:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name

    def get_me(self):
        try:
            response = self.http.get(
                url="api/v1/users/me",
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(
                f"<r>🔴 Error getting user info (<c>{self.account_name}</c>): {e}</r>"
            )
            return None
