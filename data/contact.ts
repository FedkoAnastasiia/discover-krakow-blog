import { IImageLink } from "@/common/interfaces";
import Email from "@/public/icons/email.svg";
import Telegram from "@/public/icons/telegram.svg";

const contacts: IImageLink[] = [
  {
    image: Email,
    href: "mailto:anastasia.f@theevenstar.net",
    alt: "e-mail",
  },
  {
    image: Telegram,
    href: "https://t.me/ana_sta_siia_f",
    alt: "telegram",
  },
];

export default contacts;
