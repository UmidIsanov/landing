import React from "react";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
interface SideBarItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ href, children, className }) => {
  return (
    <ListItem component="a" href={href} className={className}>
      <ListItemText primary={children} />
    </ListItem>
  );
};

export default SideBarItem;
