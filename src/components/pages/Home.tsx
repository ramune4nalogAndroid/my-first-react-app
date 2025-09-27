import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { SelectChangeEvent } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import type { MyButtonProps, MySelectProps, MyDialogProps } from "../../App";
import IntroductionCard from "../card/IntroductionCard";
import Button from '../commons/Button';

function Home() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [incrementColor, setIncrementColor] = useState('darkcyan');
  const [decrementColor, setDecrementColor] = useState('darkcyan');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        },
    });

  const handleIncrement = () => {
    if (count === 20) {
      alert("Count cannot exceed 20");
    } else {
      setCount(count + 5);
    }
  };

  const handleDecrement = () => {
    if (count === 0) {
      alert("Count cannot be less than zero");
    } else {
      setCount(count - 5);
    }
  };

  const handleDecrementColorChange = (event: SelectChangeEvent) => {
    setDecrementColor(event.target.value as string);
  }

  const handleIncrementColorChange = (event: SelectChangeEvent) => {
    setIncrementColor(event.target.value as string);
  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAcceptAndShowAlert = () => {
    setOpen(false);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleNextPage = () => {
    navigate("/table");
  }

  const incrementButton: MyButtonProps = {
    Description: "+",
    HandleClick: handleIncrement,
    ButtonColor: incrementColor,
  };

  const decrementButton: MyButtonProps = {
    Description: "-",
    HandleClick: handleDecrement,
    ButtonColor: decrementColor,
  };

  const selectIncrementColorButton: MySelectProps = {
    Label: "+ Color",
    Options: ['darkcyan', 'darkmagenta', 'darkorange', 'darkred', 'darkblue'],
    SelectedValue: incrementColor,
    HandleChange: handleIncrementColorChange,
  };

  const selectDecrementColorButton: MySelectProps = {
    Label: "-  Color",
    Options: ['darkcyan', 'darkmagenta', 'darkorange', 'darkred', 'darkblue'],
    SelectedValue: decrementColor,
    HandleChange: handleDecrementColorChange,
  };

  const dialogButton: MyDialogProps = {
    Open: open,
    HandleOpen: handleClickOpen,
    HandleClose: handleClose,
    HandleAccept: handleAcceptAndShowAlert,
  };

  const nextPageButton: MyButtonProps = {
    Description: "Next Page",
    HandleClick: handleNextPage,
    ButtonColor: 'slateblue',
  };

  return (
    <ThemeProvider theme={darkTheme}>
      {showAlert && (
        <div style={{ position: 'fixed', top: 16, left: 0, right: 0, zIndex: 1300, display: 'flex', justifyContent: 'center' }}>
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" sx={{ width: 'fit-content' }}>
            Here is a gentle confirmation that your action was successful.
          </Alert>
        </div>
      )}
      <h1>Welcome to My App</h1>
      <IntroductionCard
        count={count}
        incrementButton={incrementButton}
        decrementButton={decrementButton}
        selectIncrementColorButton={selectIncrementColorButton}
        selectDecrementColorButton={selectDecrementColorButton}
        dialogButton={dialogButton}
      />
      <div style={{ position: 'fixed', bottom: 24, left: 0, right: 0, display: 'flex', justifyContent: 'center', zIndex: 1200 }}>
        <Button {...nextPageButton} />
      </div>
    </ThemeProvider>
  );
}

export default Home;
