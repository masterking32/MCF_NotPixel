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

    def get_template_list(self):
        try:
            page = [24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168]
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

    async def do_repaint(self, charges=0):
        try:
            self.log.info(
                f"<g>🎨 Repainting <c>{charges}</c> pixels for <c>{self.account_name}</c>...</g>"
            )

            self.log.info(
                f"<g>🖼️ Getting templates for <c>{self.account_name}</c>...</g>"
            )
            templates = self.get_template_list()
            if templates is None:
                return

            template = random.choice(templates)
            template_id = template.get("templateId", None)
            if template_id is None:
                self.log.error(
                    f"<y>🟡 Unable to get template for <c>{self.account_name}</c></y>"
                )
                return

            template = self.get_template(template_id)

            if template is None:
                self.log.error(
                    f"<y>🟡 Unable to get template for <c>{self.account_name}</c></y>"
                )
                return

            self.log.info(
                f"<g>🖼️ Setting template for <c>{self.account_name}</c>...</g>"
            )

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

            image_x = my_template.get("x", 0)
            image_y = my_template.get("y", 0)

            await asyncio.sleep(3)
            self.log.info(
                f"<g>📷 Fetching pixels for the template <c>{template_id}</c> from the API for account <c>{self.account_name}</c>...</g>"
            )
            response = self.get_api_tasks_list(template_id)
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

                self.start_repaint(pixel_id, pixel_color)
                charges -= 1

                sleep_random = random.randint(5, 10)
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

    def get_api_tasks_list(self, image_id):
        if self.license_key is None:
            return None

        apiObj = API(self.log)
        data = {
            "game_name": "notpixel",
            "action": "get_task",
            "task_type": "get_image_pixels",
            "image_id": image_id,
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
            response = self.http.get(f"/api/v1/image/template/my")
            if response is None:
                return None

            return response
        except Exception as e:
            self.log.error(f"<r>❌ Error getting my template: {e}</r>")
            return None
