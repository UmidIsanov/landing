"use client";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "@/app/i18n/client";
import Logo from "@/src/shared/assets/Logo";

const Footer: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "landing");
  const socialLinks = [
    { url: "https://www.instagram.com/", text: "Instagram" },
    { url: "https://www.youtube.com/", text: "Youtube" },
    { url: "https://www.facebook.com/", text: "Facebook" },
  ];

  const rightsLinks = [t("withLove1"), t("prava"), "2016 - 2024", "Политика конфиденциальности"];

  const sparkTutorLinks = [
    { url: "/about", text: t("aboutUs") },
    { url: "/how-it-works", text: t("howItWorks") },
    { url: "/faq", text: t("faqFooter") },

    { url: "/legal", text: t("legal") },
    { url: "/contacts", text: t("usefulContacts") },
    { url: "/document-templates", text: t("documentTemplates") },
    { url: "/privacy-policy", text: t("privacyPolicy") },
  ];

  return (
    <footer className="footer bg-footerbg text-main h-[530px] p-20">
      <div className="max-w-[1200px] mx-auto flex justify-start items-center gap-32">
        <ul>
          <li>
            <h1 className="flex gap-2 items-center text-4xl">
              <Logo />
              Tabysu
            </h1>
          </li>
          <li>
            <h1 className="text-3xl pb-3 pt-5">+7 2222 000000</h1>
            <p className="text-xs pb-5">{t("withLove")}</p>
          </li>
          <li>
            <h1 className="text-3xl pb-3 pt-5">{t("media")}</h1>
            <ul className="flex flex-col text-xs gap-1 mb-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col text-xs gap-1 mb-3">
              {rightsLinks.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <h1 className="text-3xl pb-3 pt-5">{t("aboutSparkLab")}</h1>
            <ul className="flex flex-col text-xs gap-3 mb-3">
              {sparkTutorLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
