import { Menu } from "react-admin";
import LabelIcon from "@mui/icons-material/Label";

export const MyMenu = () => (
  <Menu>
    <Menu.ResourceItem name="Cards" />
    <Menu.ResourceItem name="comments" />
    <Menu.ResourceItem name="posts" />
  </Menu>
);
