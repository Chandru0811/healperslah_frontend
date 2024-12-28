import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Deactivate({ path, onDeleteSuccess, onOpen }) {
  const [isActive, setIsActive] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleActivate = () => {
    setIsActive(true);
  };

  const handleOpenDialog = () => {
    setDeleteDialogOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseDialog = () => {
    if (typeof onOpen === "function") onOpen();
    setDeleteDialogOpen(false);
    document.body.style.overflow = "";
  };

  const handleDeactivateConfirm = () => {
    setIsActive(false); 
    handleCloseDialog();
  };

  return (
    <>
      {!isActive ? (
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={handleActivate}
        >
          Activate
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={handleOpenDialog}
        >
          Deactivate
        </button>
      )}

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        keepMounted
        sx={{
          "& .MuiDialog-paper": {
            margin: "0 auto",
            top: "10%",
            position: "absolute",
          },
        }}
      >
        <DialogTitle>Deactivate Service Group</DialogTitle>
        <DialogContent>
          Are you sure you want to deactivate this Service Group?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} className="btn btn-secondary btn-sm">
            Cancel
          </Button>
          <Button onClick={handleDeactivateConfirm} className="btn btn-button">
            Deactivate
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Deactivate;
