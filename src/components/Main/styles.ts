import { Container, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";

const ContainerStyled = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh"
});

const ButtonStyled = styled(Button)({
  justifyContent: "center",
  alignItems: "center",
  "&:active": {
    transform: "translateY(-1px)"
  }
});

const List = styled("ul")({
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: 0
});

const PaperStyled = styled(Paper)({
  position: "relative",
  width: "400px",
  height: "320px",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "column",
  margin: "30px 0"
});

const TableRowStyled = styled(TableRow)<{ color: string }>((props) => ({
  backgroundColor: props.color,
  "&:hover": {
    cursor: "pointer",
    backgroundColor: `${props.color}5e`
  }
}));

const HrLine = styled("hr")({
  border: 0,
  height: "1px",
  backgroundImage:
    "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0) );",
  width: "100%"
});
const BoxInfo = styled(TableRow)<{ color: string }>((props) => ({
  backgroundColor: props.color,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "50px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  display: "flex",
  alignItems: "center",
  paddingLeft: 10
}));

export {
  ContainerStyled,
  ButtonStyled,
  List,
  PaperStyled,
  TableRowStyled,
  HrLine,
  BoxInfo
};
