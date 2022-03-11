import { Link } from 'react-router-dom'
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <ListItem disablePadding button component={Link} to={path}>
        <ListItemButton>
            <ListItemText primary={`[${props.id}] ${props.name}`} />
        </ListItemButton>
    </ListItem>
};

export default DialogItem;