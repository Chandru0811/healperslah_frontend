import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Dialog, DialogActions, DialogTitle, Slide } from "@mui/material";
import api from "../../config/URL";
import PropTypes from "prop-types";
import toast from "react-hot-toast";

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

  const handleDelete = async () => {
    try {
      const response = await api.delete(path);
      if (response.status === 200 || response.status === 201) {
        onDeleteSuccess();
        toast.success(response?.data?.message);
        if (typeof onOpen === "function") onOpen();
      }
    } catch (error) {
      if (error?.response?.status === 409) {
        toast.warning(error?.response?.data?.message);
      } else {
        toast.error("An error occurred while deleting the record.");
      }
    } finally {
      handleCloseDialog();
    }
  };

  return (
    <>
      <p
        className="text-start mb-0"
        style={{ whiteSpace: "nowrap", width: "100%" }}
        onClick={handleOpenDialog}
      >
        Delete
      </p>

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
        <DialogTitle>Are you sure you want to delete this record?</DialogTitle>
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            className="btn btn-secondary btn-sm"
          >
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

Delete.propTypes = {
  path: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onDeleteSuccess: PropTypes.func.isRequired,
};

export default Delete;
