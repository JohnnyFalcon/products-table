import { Box, Modal, Typography } from "@mui/material";
import { HrLine, BoxInfo } from "./styles";
import { Data } from "../../contexts/Products.types";

type ModalType = {
  open: boolean;
  product: Data;
  handleClose: () => void;
};

const ModalComponent = ({ open, product, handleClose }: ModalType) => {
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
    p: 4,
    pb: 2,
    display: "flex",
    flexDirection: "column",
    outline: "none",
    justifyContent: "center"
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <BoxInfo color={product.color}>
          <Typography variant="h6" component="h2">
            Prodact informations:
          </Typography>
        </BoxInfo>
        <Typography sx={{ m: 2, mt: 6 }}>ID: {product.id}</Typography>
        <HrLine />
        <Typography sx={{ m: 2 }}>NAME: {product.name}</Typography>
        <HrLine />
        <Typography sx={{ m: 2 }}>YEAR: {product.year}</Typography>
        <HrLine />
        <Typography sx={{ m: 2 }}>COLOR: {product.color}</Typography>
        <HrLine />
        <Typography sx={{ m: 2 }}>
          PANTONE VALUE: {product.pantone_value}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
