import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton,
  FunctionField,
} from "react-admin";

import { makeStyles } from "@mui/styles";
import { CancelOutlined } from "@mui/icons-material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  cardContent: {
    padding: theme.spacing(1),
  },
  row: {
    marginBottom: theme.spacing(1),
  },
}));

const getStatusIcon = (record) => {
  if (record.progress === "ended") {
    return <CheckBoxIcon color="primary" />;
  } else if (record.progress === "cancelled") {
    return <CancelOutlined color="error" />;
  } else if (record.progress === "pending") {
    return <PublishedWithChangesIcon color="secondary" />;
  } else {
    return null;
  }
};

export const CommentList = (props) => {
  const classes = useStyles();

  return (
    <List {...props} perPage={10}>
      <Datagrid classes={{ row: classes.row }}>
        <ReferenceField source="postId" reference="posts">
          <TextField source="title" />
        </ReferenceField>
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="body" />
        <FunctionField
          label="Status"
          source="progress"
          render={getStatusIcon}
        />
        EditButton
        <EditButton />
        <DeleteButton />
      </Datagrid>
      <Card className={classes.card}>
        <CardHeader
          title={<TextField source="id" />}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <TextField source="id" />
        </CardContent>
      </Card>
    </List>
  );
};

export const PostList = (props) => {
  const classes = useStyles();

  return (
    <List {...props} perPage={10}>
      <Datagrid classes={{ row: classes.row }}>
        <TextField source="id" />
        <TextField source="title" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <FunctionField
          label="Status"
          source="progress"
          render={getStatusIcon}
        />
        <EditButton />
        <DeleteButton />
      </Datagrid>
      <Card className={classes.card}>
        <CardHeader
          title={<TextField source="id" />}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <TextField source="id" />
        </CardContent>
      </Card>
    </List>
  );
};

// export const CommentList = (props) => (
//   <List {...props} perPage={10}>
//     <Card>
//       <Datagrid>
//         <ReferenceField source="postId" reference="posts">
//           <TextField source="title" />
//         </ReferenceField>
//         <TextField source="name" />
//         <TextField source="email" />
//         <TextField source="body" />
//         <EditButton />
//         <DeleteButton />
//       </Datagrid>
//       <CardContent>
//         <TextField source="id" />
//       </CardContent>
//     </Card>
//   </List>
// );
