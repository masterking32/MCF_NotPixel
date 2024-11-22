# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot

import json
import random
import time
from mcf_utils.api import API


class Secrets:
    def __init__(self, log, httpRequest, account_name, status, license_key):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.status = status
        self.license_key = license_key

    def finish_secret_mission(self):
        self.log.info("<g>🟢 Checking for secret missions ...</g>")
        try:
            if self.status is None:
                return

            secrets_list = self.get_api_secret_list()
            if secrets_list is None or "secrets" not in secrets_list:
                return

            QuestTasks = self.getQuestTasks()
            if QuestTasks is not None:
                time.sleep(random.randint(3, 5))

            finished_secret_missions = self.status.get("quests", [])
            if finished_secret_missions is None:
                finished_secret_missions = []

            for secret in secrets_list["secrets"]:
                if secret is None:
                    continue

                founded = False
                for finished_secret in finished_secret_missions:
                    if finished_secret is None:
                        continue

                    if secret.lower() in finished_secret.lower():
                        self.log.info(
                            f"<g>✅ Secret mission found: <c>{secret}</c> as completed previously</g>"
                        )
                        founded = True
                        break

                if founded:
                    continue

                self.log.info(
                    f"<y>❓ Secret mission found: <c>{secret}</c> as not completed</y>"
                )

                if self.claim_secret_mission(secret):
                    self.log.info(
                        f"<g>✅ Secret mission completed: <c>{secret}</c></g>"
                    )
                    finished_secret_missions.append(secret)
                    time.sleep(random.randint(3, 5))

        except Exception as e:
            self.log.error(f"<y>🟡 Error in finish_secret_mission, {e}</y>")

    def claim_secret_mission(self, secret):
        try:
            if secret is None:
                return False

            response = self.http.post(
                url="api/v1/mining/quest/check/secretWord",
                data=json.dumps({"secret_word": secret}),
            )

            if response is None:
                return False

            if "error" in response:
                self.log.error(
                    f"<r>🔴 Error claiming secret mission: {response['error']}</r>"
                )
                return False

            if (
                "secretWord" in response
                and "success" in response["secretWord"]
                and response["secretWord"]["success"]
            ):
                return True

            self.log.error(f"<r>🔴 Unknown error claiming secret mission</r>")
            return False

        except Exception as e:
            self.log.error(f"<r>🔴 Error in claim_secret_mission, {e}</r>")

    def getQuestTasks(self):
        try:
            response = self.http.get(
                url="api/v1/mining/quest/stats", display_errors=False
            )

            if response is None:
                return None

            return response

        except Exception as e:
            self.log.error(
                f"<r>🔴 Error getting user info (<c>{self.account_name}</c>): {e}</r>"
            )
            return None

    def get_api_secret_list(self):
        try:
            if self.license_key is None:
                return None

            apiObj = API(self.log)
            data = {
                "game_name": "notpixel",
                "action": "get_task",
                "task_type": "secret_list",
            }

            response = apiObj.get_task_answer(self.license_key, data)

            if "error" in response:
                if "license" in response["error"].lower():
                    self.log.error(f"<y>⭕ API Error: {response['error']}</y>")
                    self.log.error(f"<y>🟡 License key is invalid</y>")
                    exit()
                return None
            elif "status" in response and response["status"] == "success":
                return response
            elif (
                "status" in response
                and response["status"] == "error"
                and "message" in response
            ):
                self.log.info(f"<y>🟡 {response['message']}</y>")

                if "license" in response["message"].lower():
                    self.log.error(f"<y>🟡 License key is invalid</y>")
                    exit()
                return None
            else:
                self.log.error(
                    f"<y>🟡 Unable to get secret answers, please try again later</y>"
                )
                return None
        except Exception as e:
            self.log.error(f"<y>🟡 Error in get_api_secret_list, {e}</y>")
            return None
