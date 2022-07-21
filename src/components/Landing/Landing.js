import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";

import MenuItem from "@mui/material/MenuItem";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "@mui/material/Select";
import "./Landing.css";
const Landing = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="landing">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ASK A QUERY</DialogTitle>
        <DialogContent>
          <FormControl></FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Question"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Contact Number"
            type="number"
            fullWidth
            variant="standard"
          />
          <br />
          <br />
          <InputLabel id="demo-simple-select-label">
            SELECT YOUR STATE
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}

            label="State"
          >
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>

            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
          </Select>
          <InputLabel id="demo-simple-select-label">
            SELECT YOUR DISTRICT
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}

            label="District"
          >
            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
      <div className="container">
        <h2>SAFE SPACE</h2>
      </div>
      <button onClick={handleClick}>ASK A QUERY</button>
    </div>
  );
};

export default Landing;
