import {
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share';

export const socialItems = [
  {
    shareButton: WhatsappShareButton,
    icon: WhatsappIcon,
    name: 'Whatsapp',
    hasHashTag: true,
  },
  {
    shareButton: TelegramShareButton,
    icon: TelegramIcon,
    name: 'Telegram',
  },
  {
    shareButton: FacebookShareButton,
    icon: FacebookIcon,
    name: 'Facebook',
  },
  {
    shareButton: TwitterShareButton,
    icon: TwitterIcon,
    name: 'Twitter',
  },
];
