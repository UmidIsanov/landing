"use client";
import Link from "next/link";
import { FC, useState } from "react";
import Logo from "@/src/shared/assets/Logo";
import UserLogo from "@/src/shared/assets/UserLogo";
import Language from "@/src/shared/assets/Language";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/src/shared/model";
import { userFetchingSelector } from "@/src/entities/User/model/selectors";
import { loggedOut } from "@/src/entities/User/model/slice";
import { Box } from "@mui/material";
import { useTranslation } from "@/app/i18n/client";
import Button from "@/src/shared/ui/Button";

const Header: FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation(lng, "header");
  const { push } = useRouter();
  const { isAuth, isLoading } = useAppSelector(userFetchingSelector);
  const dispatch = useAppDispatch();
  const location = usePathname();
  const isAuthPage = location && (location.includes("/login") || location.includes("/register"));

  const scrollToAnchor = (anchorId: string) => {
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goTo = (href: string) => {
    push(href);
  };

  const logout = () => {
    dispatch(loggedOut());
    push("/");
  };

  const changeLang = (selectedLang: string) => {
    selectedLang === "ru" ? push("/ru") : push("/kz");
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-center pt-6 pb-6 bg-main">
      <Box className="container flex justify-between items-center">
        <Link href={"/"} className="flex items-center">
          <div className="">
            <Logo />
          </div>
          <div className="text-xl font-semibold ml-2">
            <h1>Tabysu</h1>
          </div>
        </Link>

        <nav aria-label="primary_navigation" className="flex items-center">
          <ul className="flex gap-12 cursor-pointer text-sm font-medium">
            <li>
              <Link onClick={() => scrollToAnchor("searchTutor")} href={"/#searchTutor"}>
                {t("find_tutor")}
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToAnchor("becomeTutor")} href={"/#becomeTutor"}>
                {t("find_job")}
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToAnchor("donate")} href={"/#donate"}>
                {t("Donate")}
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToAnchor("faq")} href={"/#faq"}>
                {t("FAQ")}
              </Link>
            </li>
            <li>
              <Link onClick={() => scrollToAnchor("fff")} href={"/#about"}>
                {t("AboutUs")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 mt-2">
          <div className="w-[24px] ">
            {!isAuth && (
              <button onClick={() => goTo("/login")} type="button">
                <UserLogo />
              </button>
            )}
          </div>
          <div className="relative">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              <Language />
            </button>
            {isOpen && (
              <div className="absolute top-full right-0 bg-white border border-gray-200 py-1 px-3 rounded shadow-lg">
                <button type="button" className="block w-full text-left mb-1" onClick={() => changeLang("ru")}>
                  RU
                </button>
                <button type="button" className="block w-full text-left" onClick={() => changeLang("kz")}>
                  KZ
                </button>
              </div>
            )}
          </div>
        </div>
      </Box>
    </header>
  );
};

export default Header;
