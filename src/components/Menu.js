import { Menu } from "react-admin";
import LabelIcon from "@mui/icons-material/Label";

export const MyMenu = () => (
  <Menu>
    <Menu.ResourceItem name="custom" />
    <Menu.ResourceItem name="comments" />
    <Menu.ResourceItem name="posts" />
    <Menu.Item
      to="/custom-route"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
    />
  </Menu>
);
