import React from "react";
import { Admin, Resource, Layout, AppBar } from "react-admin";
import "./App.css";

import CustomComponent from "./components/customComponent";
import CustomAppBar from "./components/Appbar";
import { CommentList, PostList } from "./components/ListComponent";
import { Box } from "@mui/material";
import { MyMenu } from "./components/Menu";
import BookIcon from "@mui/icons-material/Book";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import PixIcon from "@mui/icons-material/Pix";
import { comments, posts } from "./data";
import { theme } from "./theme";

const App = () => {
  const dataProvider = {
    getList: (resource, params) => {
      switch (resource) {
        case "posts":
          return Promise.resolve({ data: posts, total: posts.length });
        case "comments":
          return Promise.resolve({ data: comments, total: comments.length });
        case "users":
          return Promise.resolve({ data: [], total: 0 });
        default:
          return Promise.reject(`Unknown resource: ${resource}`);
      }
    },
  };
  const initialState = {
    admin: { ui: { sidebarOpen: false, viewVersion: 0 } },
  };
  return (
    <Box
      sx={{
        my: 5,
      }}
    >
      <Admin
        layout={CustomLayout}
        dataProvider={dataProvider}
        theme={theme}
        Menu={MyMenu}
        open={true}
        initialState={initialState}
      >
        <Resource name="Cards" list={CustomComponent} icon={PixIcon} />
        <Resource name="posts" list={PostList} icon={BookIcon} />
        <Resource name="comments" list={CommentList} icon={ModeCommentIcon} />
      </Admin>
    </Box>
  );
};

const CustomLayout = ({ theme, toggleTheme, ...props }) => (
  <Layout {...props} sidebar={MyMenu} appBar={CustomAppBar}>
    {props.children}
  </Layout>
);

export default App;
