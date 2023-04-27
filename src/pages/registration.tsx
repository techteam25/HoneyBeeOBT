import {
  Box,
  Button,
  Card,
  CardContent,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

const Registration = () => {
  //handlers for Language Menu
  const [anchorLanguage, setAnchorLanguage] =
    React.useState<null | HTMLElement>(null);
  const openLanguage = Boolean(anchorLanguage);
  const handleClickLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorLanguage(event.currentTarget);
  };
  const handleCloseLanguage = () => {
    setAnchorLanguage(null);
  };

  //handlers for Translator Menu
  const [anchorTranslator, setAnchorTranslator] =
    React.useState<null | HTMLElement>(null);
  const openTranslator = Boolean(anchorTranslator);
  const handleClickTranslator = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorTranslator(event.currentTarget);
  };
  const handleCloseTranslator = () => {
    setAnchorTranslator(null);
  };

  //handlers for Accuracy Menu
  const [anchorAccuracy, setAnchorAccuracy] =
    React.useState<null | HTMLElement>(null);
  const openAccuracy = Boolean(anchorAccuracy);
  const handleClickAccuracy = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorAccuracy(event.currentTarget);
  };
  const handleCloseAccuracy = () => {
    setAnchorAccuracy(null);
  };

  //handlers for Trainer Information
  const [anchorTrainer, setAnchorTrainer] = React.useState<null | HTMLElement>(
    null
  );
  const openTrainer = Boolean(anchorTrainer);
  const handleClickTrainer = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorTrainer(event.currentTarget);
  };
  const handleCloseTrainer = () => {
    setAnchorTrainer(null);
  };

  //handlers for Archive Information
  const [anchorArchive, setAnchorArchive] = React.useState<null | HTMLElement>(
    null
  );
  const openArchive = Boolean(anchorArchive);
  const handleClickArchive = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorArchive(event.currentTarget);
  };
  const handleCloseArchive = () => {
    setAnchorArchive(null);
  };

  return (
    <div className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            Registration
          </Typography>
        </CardContent>
      </Card>
      <Box
        style={{ marginTop: "2vh", display: "flex", justifyContent: "center" }}
      >
        <Button size="large" variant="contained" color="warning">
          <Typography style={{ textAlign: "center" }}>
            Skip Registration
          </Typography>
        </Button>
      </Box>
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
        <Button
          size="large"
          variant="contained"
          id="language-button"
          aria-controls={openLanguage ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openLanguage ? "true" : undefined}
          onClick={handleClickLanguage}
        >
          Language Information
        </Button>
        <Menu
          id="language-menu"
          anchorEl={anchorLanguage}
          open={openLanguage}
          onClose={handleCloseLanguage}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <TextField
              id="language-translation-into"
              label="Translation Into"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="language-ethnologue"
              label="Ethnologue Code"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="language-country"
              label="Country"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="language-region"
              label="Province/State/Region"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="language-village"
              label="Village/Town/City"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="language-translated-from"
              label="Translation From"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="language-orthography"
              label="Orthography Status"
              variant="outlined"
            />
          </MenuItem>
        </Menu>
      </div>
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
        <Button
          size="large"
          variant="contained"
          id="translator-button"
          aria-controls={openTranslator ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openTranslator ? "true" : undefined}
          onClick={handleClickTranslator}
        >
          Translator Information
        </Button>
        <Menu
          id="translator-menu"
          anchorEl={anchorTranslator}
          open={openTranslator}
          onClose={handleCloseTranslator}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <TextField
              id="translator-name"
              label="Translator Name"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="translator-education"
              label="Translator Education"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="translator-spoken-languages"
              label="Translator Spoken Languages"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="translator-phone"
              label="Translator Phone"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="translator-email"
              label="Translator Email"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="translator-preference"
              label="Translator Communication Preference"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="translator-location"
              label="Translator Location"
              variant="outlined"
            />
          </MenuItem>
        </Menu>
      </div>
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
        <Button
          size="large"
          variant="contained"
          id="translator-button"
          aria-controls={openAccuracy ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openAccuracy ? "true" : undefined}
          onClick={handleClickAccuracy}
        >
          Accuracy Checker Information
        </Button>
        <Menu
          id="accuracy-menu"
          anchorEl={anchorAccuracy}
          open={openAccuracy}
          onClose={handleCloseAccuracy}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <TextField
              id="accuracy-name"
              label="Accuracy Checker Name"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="accuracy-spoken-languages"
              label="Accuracy Checker Spoken Languages"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="accuracy-phone"
              label="Accuracy Checker Phone"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="accuracy-email"
              label="Accuracy Checker Email"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="accuracy-preference"
              label="Accuracy Checker Communication Preference"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="accuracy-location"
              label="Accuracy Checker Location"
              variant="outlined"
            />
          </MenuItem>
        </Menu>
      </div>
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
        <Button
          size="large"
          variant="contained"
          id="trainer-button"
          aria-controls={openTrainer ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openTrainer ? "true" : undefined}
          onClick={handleClickTrainer}
        >
          Trainer Information
        </Button>
        <Menu
          id="trainer-menu"
          anchorEl={anchorTrainer}
          open={openTrainer}
          onClose={handleCloseTrainer}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <TextField
              id="trainer-name"
              label="Trainer Name"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="trainer-spoken-languages"
              label="Trainer Spoken Languages"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="trainer-phone"
              label="Trainer Phone"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="trainer-email"
              label="Trainer Email"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="trainer-preference"
              label="Trainer Communication Preference"
              variant="outlined"
            />
          </MenuItem>
          <MenuItem>
            <TextField
              id="trainer-location"
              label="Trainer Location"
              variant="outlined"
            />
          </MenuItem>
        </Menu>
      </div>
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
        <Button
          size="large"
          variant="contained"
          id="archive-button"
          aria-controls={openArchive ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openArchive ? "true" : undefined}
          onClick={handleClickArchive}
        >
          Archive Information
        </Button>
        <Menu
          id="translator-menu"
          anchorEl={anchorArchive}
          open={openArchive}
          onClose={handleCloseArchive}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <TextField
              id="archive-email"
              label="Archive Email"
              variant="outlined"
            />
          </MenuItem>
        </Menu>
      </div>
      <Box
        style={{ marginTop: "2vh", display: "flex", justifyContent: "center" }}
      >
        <Button variant="contained" color="primary" size="large">
          <Typography style={{ textAlign: "center" }}>Submit Form</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Registration;
