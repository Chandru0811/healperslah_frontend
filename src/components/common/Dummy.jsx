import React, { useState } from "react";
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

function App() {
  const [isActive, setIsActive] = useState(false); // Tracks whether Activate or Deactivate button is shown
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // Tracks modal visibility

  const handleActivate = () => {
    setIsActive(true); // Show the Deactivate button
  };

  const handleOpenDialog = () => {
    setDeleteDialogOpen(true); // Open the modal
    document.body.style.overflow = "hidden";
  };

  const handleCloseDialog = () => {
    setDeleteDialogOpen(false); // Close the modal
    document.body.style.overflow = "";
  };

  const handleDeactivateConfirm = () => {
    setIsActive(false); // Switch back to Activate button
    handleCloseDialog(); // Close the modal
  };

  return (
    <div>
      {!isActive ? (
        // Activate Button
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={handleActivate}
        >
          Activate
        </button>
      ) : (
        // Deactivate Button
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={handleOpenDialog}
        >
          Deactivate
        </button>
      )}

      {/* Modal */}
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
          <Button onClick={handleCloseDialog} variant="outline-secondary">
            Cancel
          </Button>
          <Button onClick={handleDeactivateConfirm} variant="danger">
            Deactivate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
