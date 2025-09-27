import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import type { MyDialogProps } from "../../App";

function IntroductionDialog({ Open, HandleOpen, HandleClose, HandleAccept }: MyDialogProps) {
    return (
        <div>
            <Button variant="outlined" onClick={HandleOpen}>Open dialog</Button>
            <Dialog
                open={Open}
                onClose={HandleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Continue?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Despite everything, it's still you!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={HandleAccept}>Accept</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default IntroductionDialog;