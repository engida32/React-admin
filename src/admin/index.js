import {
  Admin,
  defaultTheme,
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  NumberField,
  EditButton,
  ShowButton,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import CustomAppBar from "../components/Appbar";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

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

const MyAdmin = () => (
  <Admin dataProvider={dataProvider} theme={theme} appBar={CustomAppBar}>
    <List>
      <Datagrid
        sx={{
          backgroundColor: "Lavender",
          "& .RaDatagrid-headerCell": {
            backgroundColor: "MistyRose",
          },
        }}
      >
        <TextField source="id" />
        <TextField source="title" />
        <DateField source="published_at" sortByOrder="DESC" />
        <BooleanField source="commentable" sortable={false} />
        <NumberField source="views" sortByOrder="DESC" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  </Admin>
);

export default MyAdmin;
