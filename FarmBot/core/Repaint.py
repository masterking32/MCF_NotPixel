# Developed by: MasterkinG32
# Date: 2024
# Github: https://github.com/masterking32
# Telegram: https://t.me/MasterCryptoFarmBot


import asyncio
import json
import random
import time
from mcf_utils.api import API

from utilities.utilities import getConfig


class Repaint:
    def __init__(self, log, httpRequest, account_name, license_key):
        self.log = log
        self.http = httpRequest
        self.account_name = account_name
        self.license_key = license_key
        self.pixels = None

    def get_template_list(self):
        try:
            # page = [24]
            page = [0]
            response = self.http.get(
                f"/api/v1/image/template/list?limit=12&offset={random.choice(page)}"
            )
            if response is None:
                return None

            return response
        except Exception as e:
            self.log.error(f"<r>❌ Error getting templates: {e}</r>")
            return None

    def get_template(self, template_id):
        try:
            response = self.http.get(f"/api/v1/image/template/{template_id}")
            if response is None:
                return None

            return response
        except Exception as e:
            self.log.error(f"<r>❌ Error getting templates: {e}</r>")
            return None

    def set_template(self, template_id):
        try:
            response = self.http.put(
                f"/api/v1/image/template/subscribe/{template_id}",
                only_json_response=False,
                display_errors=False,
            )
            if response is None:
                return None

            return response
        except Exception as e:
            self.log.error(f"<r>❌ Error setting template: {e}</r>")
            return None

    def do_halloween_repaint(self, charges=0):
        try:
            if charges == 0:
                self.log.info(f"<y>🟡 No charges for halloween repaint</y>")
                return
            self.log.info(f"<g>🎃 Start halloween task...</g>")

            for i in range(charges):
                self.log.info(f"<g>🎃 Repainting pixel {i+1}/{charges}...</g>")

                data = {"pixelId": 281789, "type": 7}
                data["pixelId"] = 280000 + random.randint(1000, 3000)
                self.http.post(url="api/v1/repaint/special", data=json.dumps(data))
                self.log.info(f"<g>🎃 Repainted pixel {i+1}/{charges}...</g>")
                time.sleep(1)
        except Exception as e:
            self.log.error(
                f"<r>❌ Error repainting pixels for <c>{self.account_name}</c>: {e}</r>"
            )

    async def do_repaint(self, charges=0):
        return
        try:
            self.log.info(
                f"<g>🎨 Repainting <c>{charges}</c> pixels for <c>{self.account_name}</c>...</g>"
            )

            self.log.info(
                f"<g>🖼️ Getting templates for <c>{self.account_name}</c>...</g>"
            )
            # templates = self.get_template_list()
            # if templates is None:
            #     return

            # template_id = random.choice(
            #     [
            #         95736407,
            #         1211823521,
            #         6172166098,
            #         1367422017,
            #         6488265864,
            #     ]
            # )
            # template = random.choice(templates)
            # template_id = template.get("templateId", None)
            # if template_id is None:
            #     self.log.error(
            #         f"<y>🟡 Unable to get template for <c>{self.account_name}</c></y>"
            #     )
            #     return
            # template = self.get_template(template_id)
            # if template is None:
            #     self.log.error(
            #         f"<y>🟡 Unable to get template for <c>{self.account_name}</c></y>"
            #     )
            #     return

            my_template = self.get_my_template()
            if my_template is None:
                my_template = {}
                if getConfig("ignore_select_template", True) == False:
                    self.log.error(
                        f"<y>🟡 Account <c>{self.account_name}</c> has no template right now, so we cannot set it at this moment because it is not available on Notpixel at this time.</y>"
                    )
                    return

                my_template = {
                    "id": 1234,
                    "url": "https://notpixel.io/NO_IMAGE",
                }

            image_url = my_template.get("url", None)
            if image_url is None:
                self.log.error(
                    f"<y>🟡 Unable to get image URL for <c>{self.account_name}</c></y>"
                )
                return

            template_id = my_template.get("id", None)
            valid_template_list = [1367422017, 95736407, 1137547747]
            if template_id not in valid_template_list:
                self.log.info(
                    f"<g>🖼️ Setting template for <c>{self.account_name}</c>...</g>"
                )
                await asyncio.sleep(1)
                template_id = random.choice(valid_template_list)
                self.set_template(template_id)
                await asyncio.sleep(1)
                my_template = self.get_my_template()
                if my_template is None:
                    return

                template_id = my_template.get("id", None)
                if template_id is None or template_id == 0:
                    self.log.error(
                        f"<y>🟡 Unable to get template for <c>{self.account_name}</c></y>"
                    )
                    return
                image_url = my_template.get("url", None)

            self.log.info(
                f"<g>🖼️ Painting template <c>{image_url}</c> for <c>{self.account_name}</c>...</g>"
            )

            image_x = my_template.get("x", 0)
            image_y = my_template.get("y", 0)
            imageSize = my_template.get("imageSize", 0)

            await asyncio.sleep(3)
            self.log.info(
                f"<g>📷 Fetching pixels for the template <c>{template_id}</c> from the API for account <c>{self.account_name}</c>...</g>"
            )

            response = self.get_api_tasks_list(template_id, imageSize)
            if response is None:
                return

            if self.pixels is None:
                self.log.error(
                    f"<y>🟡 Unable to get pixels for <c>{self.account_name}</c></y>"
                )
                return

            while charges > 0:
                if self.pixels is None or len(self.pixels) == 0:
                    break

                random_pixel = self.pixels.pop()
                if random_pixel is None:
                    break

                pixel_x = random_pixel.get("x", 0) + image_x
                pixel_y = random_pixel.get("y", 0) + image_y
                pixel_color = random_pixel.get("color", "#000000")

                if pixel_x < 0 or pixel_y < 0:
                    continue

                self.log.info(
                    f"<g>🎨 Repainting pixel at X: <c>{pixel_x}</c>, Y: <c>{pixel_y}</c> with color: <c>{pixel_color}</c> for account: <c>{self.account_name}</c>...</g>"
                )

                pixel_x += 1
                pixel_x = str(pixel_x).zfill(3)
                pixel_id = int(f"{pixel_y}{pixel_x}")

                paint_resp = self.start_repaint(pixel_id, pixel_color)

                if paint_resp is None:
                    return

                if "balance" in paint_resp:
                    balance = paint_resp["balance"]
                    self.log.info(
                        f"<g>💰 New balance after painting: <c>{balance}</c></g>"
                    )

                charges -= 1

                # No wait like fast mode.
                # sleep_random = random.randint(5, 10)
                # await asyncio.sleep(sleep_random)

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

            respo = self.http.post(
                url="api/v1/repaint/start",
                data=data,
            )

            if respo is None:
                return None

            return respo
        except Exception as e:
            self.log.error(f"<y>🟡 Error for <c>{self.account_name}</c>: {e}</y>")

    def get_api_tasks_list(self, image_id, imageSize):
        if self.license_key is None:
            return None

        apiObj = API(self.log)
        data = {
            "game_name": "notpixel",
            "action": "get_task",
            "task_type": "get_image_pixels",
            "image_id": image_id,
            "imageSize": imageSize,
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

    def get_my_template(self):
        try:
            response = self.http.get(f"/api/v1/image/template/my", display_errors=False)
            if response is None:
                return None

            return response
        except Exception as e:
            self.log.error(f"<r>❌ Error getting my template: {e}</r>")
            return None
