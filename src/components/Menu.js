import { Menu } from "react-admin";
import LabelIcon from "@mui/icons-material/Label";

export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="custom" />
    <Menu.ResourceItem name="posts" />
    <Menu.ResourceItem name="comments" />
    <Menu.Item
      to="/custom-route"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
    />
  </Menu>
);
