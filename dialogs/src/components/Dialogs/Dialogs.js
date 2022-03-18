import DialogItem from "../DialogItem";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import {blueGrey} from '@mui/material/colors';

import * as React from "react";

const Dialogs = () => {
    return (
        <Box
            sx={{ width: '100%', maxWidth: '600px', bgcolor: blueGrey.A700, color: blueGrey[50] }}
        >
            <nav aria-label="main mailbox folders">
                <List>
                    <DialogItem name={"Vanya"} id={1} message={"Sample message"}/>
                    <DialogItem name={"Max"} id={2} message={"Another message"}/>
                    <DialogItem name={"Borya"} id={3} message={"Message"}/>
                </List>
            </nav>
        </Box>
    )
};


export default Dialogs;