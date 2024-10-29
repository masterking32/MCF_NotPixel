# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


import asyncio
from mcf_utils.api import API
from utilities.utilities import getConfig


class Tasks:
    def __init__(self, log, httpRequest, account_name, license_key, tgAccount=None):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.license_key = license_key
        self.tasks = None
        self.tgAccount = tgAccount

    async def claim_tasks(self, status_data):
        try:
            if self.tasks is None:
                return

            finished_tasks = status_data.get("tasks", {})
            for task in self.tasks:
                if task is None:
                    continue

                if task in finished_tasks:
                    continue

                await self.handle_task(task, status_data)

        except Exception as e:
            self.log.error(f"<y>🟡 Claim Tasks Error: {e}</y>")

    async def handle_task(self, task, status_data):
        try:
            if task is None:
                return

            if task.startswith("x:"):
                pass
            elif task.startswith("league"):
                league = status_data.get("league", "bronze").lower()
                if league not in task.lower():
                    return

            elif task.startswith("paint"):
                paint = "".join(filter(str.isdigit, task))
                paint = int(paint) if paint.isdigit() else 0
                if paint < 1 or paint > status_data.get("repaintsTotal", 0):
                    return

            elif task.startswith("channel:"):
                if getConfig("auto_join_channels", True) and self.tgAccount is not None:
                    channel = task.replace("channel:", "")
                    await self.tgAccount.joinChat(channel)
                else:
                    return
            elif task == "pixelInNickname":
                if self.tgAccount is None:
                    return

                tgMe = self.tgAccount.me if self.tgAccount.me else None
                if tgMe is None:
                    return

                tgMe.first_name = tgMe.first_name or ""
                tgMe.last_name = tgMe.last_name or ""

                if "▪️" not in tgMe.last_name and "▪️" not in tgMe.first_name:
                    await self.tgAccount.setName(tgMe.first_name, tgMe.last_name + "▪️")
                    self.log.info(
                        f"<cyan>{self.account_name}</cyan><g> | ▪️ Tag has been added to the last name!</g>"
                    )

                    await asyncio.sleep(3)
                else:
                    self.log.info(
                        f"<cyan>{self.account_name}</cyan><g> | ▪️ Tag already exists!</g>"
                    )

            self.log.info(f"<g>🔍 Checking task: </g><c>{task}</c>")
            response = self.check_task(task)

            if response is None:
                return

            if task in response and response[task]:
                self.log.info(
                    f"<g>✅ Task <c>{task}</c> successfully claimed for <c>{self.account_name}</c></g>"
                )
            else:
                self.log.info(
                    f"<y>⚠️ Task <c>{task}</c> failed to claim for <c>{self.account_name}</c></y>"
                )

            await asyncio.sleep(3)
        except Exception as e:
            self.log.error(
                f"<r>❌ Error handling task <c>{task}</c> for <c>{self.account_name}</c>: {e}</r>"
            )

    def check_task(self, task):
        try:
            url = "api/v1/mining/task/check/"
            if ":" in task:
                url = f"{url}{task.replace(':', '?name=')}"
            else:
                url = f"{url}{task}"

            print(url)
            response = self.http.get(url)
            if response is None:
                return None

            return response
        except Exception as e:
            self.log.error(
                f"<r>❌ Error checking task <c>{task}</c> for <c>{self.account_name}</c>: {e}<r>"
            )
            return None

    def get_api_tasks_list(self):
        if self.license_key is None:
            return None

        apiObj = API(self.log)
        data = {
            "game_name": "notpixel",
            "action": "get_task",
            "task_type": "game_tasks",
        }

        response = apiObj.get_task_answer(self.license_key, data)

        if "error" in response:
            if "license" in response["error"].lower():
                self.log.error(f"<y>⭕ API Error: {response['error']}</y>")
                self.log.error(f"<y>🟡 License key is invalid</y>")
                exit()
            return None
        elif "status" in response and response["status"] == "success":
            self.tasks = response["tasks"]
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
                f"<y>🟡 Unable to get task answer, please try again later</y>"
            )
            return None
