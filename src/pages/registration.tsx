import {
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
  const [anchorLanguage, setAnchorLanguage] =
    React.useState<null | HTMLElement>(null);
  const [anchorTranslator, setAnchorTranslator] =
    React.useState<null | HTMLElement>(null);
  const openLanguage = Boolean(anchorLanguage);
  const openTranslator = Boolean(anchorTranslator);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorLanguage(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorLanguage(null);
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
      <div style={{ textAlign: "center", marginTop: "2vh" }}>
        <Button
          size="large"
          variant="contained"
          id="language-button"
          aria-controls={openLanguage ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openLanguage ? "true" : undefined}
          onClick={handleClick}
        >
          Language Information
        </Button>
        <Menu
          id="language-menu"
          anchorEl={anchorLanguage}
          open={openLanguage}
          onClose={handleClose}
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
          onClick={handleClick}
        >
          Translator Information
        </Button>
        <Menu
          id="translator-menu"
          anchorEl={anchorTranslator}
          open={openTranslator}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <TextField
              id="language-translation-into"
              label="Translation Language"
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
              id="language-orthography"
              label="Orthography Status"
              variant="outlined"
            />
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Registration;
