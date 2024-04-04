"use client";

import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LeftSidebar from "@/src/widgets/LeftSideBar";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import ProfileImg from "@/src/shared/assets/avatar2.svg";

export default function LeftSidebarLayout({ children }: { children: ReactNode }) {
  const profileInfo = {
    ProfileImg: ProfileImg,
    name: "Ирина Кайратовна",
    email: "example@gmail.com",
  };

  const sidebarItems = [
    { href: "/moderator/info", icon: <AccountCircleOutlinedIcon className="mr-2" />, text: "Информация" },
    {
      href: "/moderator/applications",
      icon: <BusinessCenterOutlinedIcon className="mr-2" />,
      text: "Мои заявки",
    },
    { href: "/", icon: <NotificationsOutlinedIcon className="mr-2" />, text: "Уведомления" },
    { href: "/", icon: <GridViewIcon className="mr-2" />, text: "Коннекты" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <LeftSidebar sidebarItems={sidebarItems} profileInfo={profileInfo} />
      <Container maxWidth={"xl"} style={{ padding: 0 }}>
        <div className="ml-10 justify-center mt-7" style={{ marginTop: "66px" }}>
          {children}
        </div>
      </Container>
    </Box>
  );
}
