import React, { useState } from "react";
import { Admin, Resource, Layout, AppBar } from "react-admin";
import "./App.css";

import CustomComponent from "./components/customComponent";
import { CommentList, PostList } from "./components/PostList";
import { defaultTheme, useTheme } from "react-admin";
import { Button } from "@mui/material";
import CustomAppBar from "./components/Appbar";

const lightTheme = defaultTheme;
const darkTheme = {
  ...defaultTheme,
  palette: {
    mode: "dark",
  },
};
const posts = [
  {
    id: 1,
    title: "First Post",
    body: "This is the first post.",
    userId: 1,
    progress: "pending",
  },
  {
    id: 2,
    title: "Second Post",
    body: "This is the second post.",
    userId: 2,
    progress: "ended",
  },
  {
    id: 3,
    title: "Third Post",
    body: "This is the third post.",
    userId: 1,
    progress: "cancelled",
  },
  {
    id: 4,
    title: "Fourth Post",
    body: "This is the fourth post.",
    userId: 2,
    progress: "pending",
  },
];

const comments = [
  {
    id: 1,
    postId: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    body: "This is a comment on the first post.",
    progress: "pending",
  },
  {
    id: 2,
    postId: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    body: "This is a comment on the second post.",
    progress: "ended",
  },
  {
    id: 3,
    postId: 3,
    name: "John Doe",
    email: "johndoe@example.com",
    body: "This is a comment on the third post.",
    progress: "cancelled",
  },
  {
    id: 4,
    postId: 1,
    name: "Jane Smith",
    email: "janesmith@example.com",
    body: "This is another comment on the first post.",
    progress: "pending",
  },
];

const theme = {
  ...defaultTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#303030",
    },
  },
};

const App = () => {
  // const theme = {
  //   ...defaultTheme,
  //   palette: {
  //     mode: "dark",
  //     ...colorPalette,
  //   },
  // };

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

  return (
    <Admin layout={CustomLayout} dataProvider={dataProvider} theme={theme}>
      <Resource name="posts" list={PostList} />
      <Resource name="comments" list={CommentList} />
      <Resource name="custom" list={CustomComponent} />
      <PostList resource="posts" dataProvider={dataProvider} />
      <CommentList resource="comments" dataProvider={dataProvider} />
    </Admin>
  );
};

const CustomLayout = ({ theme, toggleTheme, ...props }) => (
  <Layout {...props} appBar={CustomAppBar}>
    {props.children}
  </Layout>
);

export default App;
