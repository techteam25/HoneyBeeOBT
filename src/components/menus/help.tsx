import { Box, Button, Icon } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import styles from './pageNav.module.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const Help = () => {
  return (
    <div className="help">
      <QuestionMarkIcon style={{position: "relative", float: "right", margin: 30}}/>
    </div>
  );
};

export default Help;
