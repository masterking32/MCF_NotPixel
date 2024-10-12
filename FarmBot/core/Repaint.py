# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


import asyncio
import json
import random
from mcf_utils.api import API


class Repaint:
    def __init__(self, log, httpRequest, account_name, license_key):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.license_key = license_key
        self.pixels = None
        self.pixel_colors = [
            "#000000",
            "#FFFFFF",
            "#3690EA",
            "#6D482F",
            "#7EED56",
            "#00CC78",
            "#2450A4",
            "#BE0039",
            "#6D001A",
            "#FF9600",
            "#BF4300",
            "#51E9F4",
            "#898D90",
            "#E4ABFF",
        ]

    async def do_repaint(self, charges=0):
        try:
            self.log.info(
                f"<g>🎨 Repainting <c>{charges}</c> pixels for <c>{self.account_name}</c>...</g>"
            )

            await asyncio.sleep(4)
            response = self.get_api_tasks_list()
            if response is None:
                return

            if self.pixels is None:
                self.log.error(
                    f"<y>🟡 Unable to get pixels for <c>{self.account_name}</c></y>"
                )
                return

            while charges > 0:
                if self.pixels is None or len(self.pixels) == 0:
                    self.get_api_tasks_list()
                    await asyncio.sleep(5)

                if self.pixels is None or len(self.pixels) == 0:
                    break

                random_pixel = self.pixels.pop()
                if random_pixel is None:
                    continue

                pixel_id = random_pixel.get("pixelId", None)
                pixel_newColor = random_pixel.get("newColor", None)
                random_color = self.getRandomColor(pixel_newColor)

                if charges > 1:
                    self.start_repaint(pixel_id, random_color)
                    await asyncio.sleep(0.2)
                    self.start_repaint(pixel_id, pixel_newColor)
                    charges -= 2
                else:
                    self.start_repaint(pixel_id, pixel_newColor)
                    charges -= 1

                sleep_random = random.randint(3, 5)
                await asyncio.sleep(sleep_random)

            self.log.info(
                f"<g>✅ Repainting for <c>{self.account_name}</c> has been successfully completed</g>"
            )
        except Exception as e:
            self.log.error(
                f"<r>❌ Error repainting pixels for <c>{self.account_name}</c>: {e}</r>"
            )

    def start_repaint(self, pixel_id, pixel_newColor):
        try:
            data = json.dumps(
                {
                    "pixelId": pixel_id,
                    "newColor": pixel_newColor,
                }
            )
            self.http.post(
                url="api/v1/repaint/start",
                data=data,
            )

        except Exception as e:
            self.log.error(f"<y>🟡 Error for <c>{self.account_name}</c>: {e}</y>")

    def getRandomColor(self, pixel_newColor):

        random_color = random.choice(self.pixel_colors)
        while random_color == pixel_newColor:
            random_color = random.choice(self.pixel_colors)

        return random_color

    def get_api_tasks_list(self):
        if self.license_key is None:
            return None

        apiObj = API(self.log)
        data = {
            "game_name": "notpixel",
            "action": "get_task",
            "task_type": "pixels",
        }

        response = apiObj.get_task_answer(self.license_key, data)

        if "error" in response:
            if "license" in response["error"].lower():
                self.log.error(f"<y>⭕ API Error: {response['error']}</y>")
                self.log.error(f"<y>🟡 License key is invalid</y>")
                exit()
            return None
        elif "status" in response and response["status"] == "success":
            self.pixels = response["pixels"]
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
