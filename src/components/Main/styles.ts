import { Container, Button, Paper, Box } from "@mui/material";
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

const TableRowStyled = styled(TableRow)({
  "&:hover": {
    opacity: 0.8,
    cursor: "pointer"
  }
});
export { ContainerStyled, ButtonStyled, List, PaperStyled, TableRowStyled };