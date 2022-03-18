import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Dialogs from "../../components/Dialogs"
import CurrentDialog from "../../components/CurrentDialog/CurrentDialog";

export default function BasicList() {
    return (
        <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Grid sx={{ maxWidth: 900 }} container spacing={2}>
                <Grid item xs={4}><Dialogs /></Grid>
                <Grid item xs={8}><CurrentDialog /></Grid>
            </Grid>
        </Box>
    );
}