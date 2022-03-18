import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
                marginBlockEnd: "10px"
            }}
        >
        <h1>Menu</h1>
        <Link to="/quote1">Quote 1</Link> | {" "}
        <Link to="/quote2">Quote 2</Link> | {" "}
        <Link to="/temperature">Temperature</Link> | {" "}
        <Link to="/dialogs">Dialogs</Link>
    </nav>
}

export default Header;
