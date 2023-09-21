import * as React from "react";
import Modal from "@mui/material/Modal";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
interface Prop {
  showModel: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
  maxWidth?: string;
  modalHeader?: React.ReactNode;
  modalBody?: React.ReactNode;
  modalFooter?: React.ReactNode;
}

const MuiModal = ({
  showModel,
  set,
  maxWidth,
  modalBody,
  modalFooter,
  modalHeader,
}: Prop) => {
  const [open, setOpen] = useState(showModel);
  const handleClose = () => {
    setOpen(false);
    set(false);
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Box className="overlay" data-testid="overlay" onClick={handleClose} />
      <Modal
        disableAutoFocus={true}
        data-testid="test-modal"
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        slotProps={{
          backdrop: {
            style: {
              backdropFilter: "blur(8px)",
            },
          },
        }}
      >
        <Grid
          container
          direction="column"
          sx={{ width:"unset", padding: "0px" }}
        >
          <Grid item>{modalHeader}</Grid>
          <Grid item>{modalBody}</Grid>
          <Grid item>{modalFooter}</Grid>
        </Grid>
      </Modal>
    </Box>
  );
};
export default MuiModal;
