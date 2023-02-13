import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { URLS } from "../../../../infra/URLS";

export const infoFooter = [
  {
    id: 1,
    title: "FAQ",
    url: URLS.FAQ,
  },
  {
    id: 2,
    title: "Politica de Privacidade",
    url: URLS.PRIVACY_POLICY,
  },
  {
    id: 3,
    title: "Termos de Uso",
    url: URLS.TERMS_OF_USE,
  },
]

export const socialFooter = [
  {
    id: 1,
    title: "Facebook",
    url: 'https://www.facebook.com/',
    icon: <AiFillFacebook color='#4267B2' size={20} />,
  },
  {
    id: 2,
    title: "Instagram",
    url: 'https://www.instagram.com/',
    icon: <AiFillInstagram color='#F56040' size={20} />,
  },
  {
    id: 3,
    title: "Twitter",
    url: 'https://www.twitter.com/',
    icon: <AiFillTwitterSquare color='#1DA1F2' size={20} />,
  },
]
