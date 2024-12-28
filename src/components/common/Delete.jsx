import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Dialog, DialogActions, DialogTitle, Slide } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Delete({ path, onDeleteSuccess, onOpen }) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDeleteDialogOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseDialog = () => {
    if (typeof onOpen === "function") onOpen();
    setDeleteDialogOpen(false);
    document.body.style.overflow = "";
  };

  const handleDelete = () => {
    handleCloseDialog();
  };

  return (
    <>
      <p
        className="text-start mb-0"
        style={{ whiteSpace: "nowrap", width: "100%" }}
        onClick={handleOpenDialog} // Open dialog
      >
        Delete
      </p>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDialog} // Close dialog and reset scroll
        TransitionComponent={Transition} // Add Transition Component
        keepMounted // Keep mounted for smoother transitions
        sx={{
          "& .MuiDialog-paper": {
            margin: "0 auto",
            top: "10%",
            position: "absolute",
          },
        }}
      >
        <DialogTitle>Are you sure you want to delete this record?</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseDialog} className="btn btn-secondary btn-sm">
            Cancel
          </Button>
          <Button onClick={handleDelete} className="btn btn-button">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Delete;
