import { useContext, useState } from "react";
import {
  ProductsContext,
  ProductsContextType
} from "../../contexts/ProductsContext";
import {
  Box,
  InputAdornment,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Typography
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import {
  ContainerStyled,
  ButtonStyled,
  PaperStyled,
  TableRowStyled
} from "./styles";

const Main = () => {
  const {
    currentProducts,
    loading,
    currentPage,
    setCurrentPage,
    setSearchTerm,
    searchTerm,
    error
  } = useContext(ProductsContext) as ProductsContextType;
  const [open, setOpen] = useState<boolean>(false);
  const [modalIndex, setModalIndex] = useState<number>(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minidth: 400,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4
  };
  return (
    <>
      <ContainerStyled>
        <Box>
          <TextField
            data-testid="filterInput"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            label="Search product"
            variant="standard"
            value={searchTerm}
            onClick={() => setCurrentPage(1)}
            onChange={(e) => {
              // Using regex to allow only numebers to be typed
              const re = /^[0-9\b]+$/;
              if (
                (e.target.value === "" || re.test(e.target.value)) &&
                e.target.value.length <= 2
              ) {
                setSearchTerm(e.target.value);
              }
            }}
          />
        </Box>

        <PaperStyled elevation={5}>
          {error === "" ? (
            !loading ? (
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Year</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentProducts.map((row, index) => (
                    <>
                      <TableRowStyled
                        key={row.id}
                        color={row.color}
                        onClick={() => {
                          setModalIndex(index);
                          handleOpen();
                        }}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 }
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.year}</TableCell>
                      </TableRowStyled>

                      <Modal
                        open={index === modalIndex && open}
                        onClose={handleClose}
                      >
                        <Box sx={style}>
                          <Typography variant="h6" component="h2">
                            Prodact informations:
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              padding: 0,
                              justifyContent: "center"
                            }}
                          >
                            <Typography sx={{ m: 2 }}>ID: {row.id}</Typography>
                            <Typography sx={{ m: 2 }}>
                              NAME: {row.name}
                            </Typography>
                            <Typography sx={{ m: 2 }}>
                              YEAR: {row.year}
                            </Typography>
                          </Box>
                        </Box>
                      </Modal>
                    </>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p>Loading...</p>
            )
          ) : (
            error
          )}
        </PaperStyled>

        <Box
          sx={{
            width: "400px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <ButtonStyled
            variant="outlined"
            disabled={(searchTerm.length > 0 || currentPage === 1) && true}
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            {" "}
            <ArrowBackIcon sx={{ translate: "0 -10%" }} /> Previes{" "}
          </ButtonStyled>
          <ButtonStyled
            variant="outlined"
            disabled={(searchTerm.length > 0 || currentPage === 3) && true}
            onClick={() => {
              if (currentPage < 3) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            {" "}
            Next <ArrowForwardIcon sx={{ translate: "0 -10%" }} />{" "}
          </ButtonStyled>
        </Box>
      </ContainerStyled>
    </>
  );
};

export default Main;
