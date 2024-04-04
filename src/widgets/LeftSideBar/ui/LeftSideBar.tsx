"use client";
import { FC } from "react";
import SideBarItem from "./SideBarItem";
import styles from "../styles/sidebar.module.scss";
import { Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/material";

interface ProfileInfo {
  ProfileImg?: any;
  name?: string;
  email?: string;
}

interface SidebarItemProps {
  href: string;
  icon: JSX.Element;
  text: string;
}

const Sidebar: FC<{ sidebarItems: SidebarItemProps[]; profileInfo: ProfileInfo }> = ({ sidebarItems, profileInfo }) => {
  const { ProfileImg, name, email } = profileInfo || {};
  return (
    <aside className="h-screen flex-shrink-0 bg-white shadow-md left-0" style={{ width: "347px" }}>
      <div className="p-4">
        <ul className="space-y-2">
          {ProfileImg && name && email && <ProfileSection ProfileImg={ProfileImg} name={name} email={email} />}

          {sidebarItems.map((item, index) => (
            <SideBarItem key={index} href={item.href} className={styles.sideBar}>
              <Box className="flex items-center">
                {item.icon} {item.text}
              </Box>
            </SideBarItem>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const ProfileSection: FC<{ ProfileImg: any; name: string; email: string }> = ({ ProfileImg, name, email }) => {
  return (
    <StyledProfileSection>
      <StyledImageAndNameBox>
        <Box>
          <ProfileImg style={{ width: "50px", height: "50px" }} />
          {/* <Image src={profileImg} width={50} height={50} alt="profile image" style={{ marginTop: "5px" }} /> */}
        </Box>

        <Box>
          <StyledProfileName>{name}</StyledProfileName>
          <Typography sx={{ color: "#667085" }}>{email}</Typography>
        </Box>
      </StyledImageAndNameBox>
      <StyledLogOutIcon />
    </StyledProfileSection>
  );
};

const StyledProfileSection = styled(Box)({
  display: "flex",
  gap: "25px",
  marginBottom: "60px",
});

const StyledImageAndNameBox = styled(Box)({
  display: "flex",
  gap: "19px",
});

const StyledProfileName = styled(Typography)({
  fontWeight: "bold",
  fontSize: "20px",
});

const StyledLogOutIcon = styled(LogoutIcon)({
  marginTop: "15px",
  cursor: "pointer",
});

export default Sidebar;
