# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


class Upgrades:
    def __init__(self, log, httpRequest, account_name):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.levels = {
            "paintReward": {
                2: {"Price": 5, "Boost": 1.5},
                3: {"Price": 100, "Boost": 2},
                4: {"Price": 200, "Boost": 2.5},
                5: {"Price": 300, "Boost": 3},
                6: {"Price": 500, "Boost": 3.5},
                7: {
                    "Price": 600,
                    "Boost": 4,
                },
            },
            "reChargeSpeed": {
                2: {
                    "Price": 5,
                },
                3: {
                    "Price": 100,
                },
                4: {
                    "Price": 200,
                },
                5: {
                    "Price": 300,
                },
                6: {
                    "Price": 400,
                },
                7: {
                    "Price": 500,
                },
                8: {
                    "Price": 600,
                },
                9: {
                    "Price": 700,
                },
                10: {
                    "Price": 800,
                },
                11: {
                    "Price": 900,
                },
            },
            "energyLimit": {
                2: {"Price": 5, "Boost": 12},
                3: {"Price": 100, "Boost": 14},
                4: {"Price": 200, "Boost": 16},
                5: {"Price": 300, "Boost": 18},
                6: {
                    "Price": 400,
                    "Boost": 20,
                },
                7: {
                    "Price": 10,
                    "Boost": 24,
                },
            },
        }

    async def upgrade(self, upgrade_type, current_balance, current_level):
        try:
            max_levels = {
                "reChargeSpeed": 11,
                "paintReward": 7,
                "energyLimit": 7,
            }

            if current_level >= max_levels[upgrade_type]:
                return current_balance

            next_level = current_level + 1
            if next_level not in self.levels[upgrade_type]:
                return current_balance

            price = self.levels[upgrade_type][next_level]["Price"]
            if current_balance < price:
                self.log.info(
                    f"<y>💸 Not enough balance to upgrade {upgrade_type} for <c>{self.account_name}</c></y>"
                )
                return current_balance

            self.log.info(
                f"<g>🔋 Upgrading {upgrade_type} to <c>{next_level}</c> for <c>{self.account_name}</c></g>"
            )

            response = await self.upgrade_boost(upgrade_type)
            if response is None:
                return current_balance

            if upgrade_type in response and response[upgrade_type]:
                current_balance -= price
                self.log.info(
                    f"<g>✅ {upgrade_type} upgraded to <c>{next_level}</c> for <c>{self.account_name}</c></g>"
                )
                return current_balance

            self.log.error(
                f"<r>❌ Failed to upgrade {upgrade_type} for <c>{self.account_name}</c></r>"
            )

            return current_balance

        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to upgrade {upgrade_type}!</r>")
            return current_balance

    async def upgrade_boost(self, name):
        try:
            response = self.http.get(
                url=f"/api/v1/mining/boost/check/{name}",
            )

            if response is None:
                return None

            return response
        except Exception as e:
            self.log.error(f"<r>⭕ {e} failed to upgrade {name}!</r>")
            return None
