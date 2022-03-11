import * as React from "react";
import {useParams} from "react-router-dom";
import {Card} from "@mui/material";
import {blueGrey} from "@mui/material/colors";
import Box from "@mui/material/Box";

export default function CurrentDialog(props) {
    let params = useParams();
    return (
        <Card sx={{
            width: '100%',
            height: '100%',
            maxWidth: 360,
            bgcolor: blueGrey.A100,
            color: blueGrey.A700,
            paddingInlineStart: "10px",
            paddingInlineEnd: "10px",
            fontWeight: 'bold'
        }}>
            <Box sx={{paddingTop: '20px'}}>
                Your dialog with USER-<Box component="span" sx={{color: 'black'}}>{params.id}</Box>
            </Box>
        </Card>
    );
}