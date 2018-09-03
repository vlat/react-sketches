import React from 'react';
import { NavLink } from 'react-router-dom';
import SideMenuBar from "./SideMenuBar";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import SearchIcon from '@material-ui/icons/Search';


const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flexGrow: 1
    }
};

const Header = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Toolbar className="toolbar">
                <SideMenuBar />

                <NavLink className="sberbank-logo" to="/" target="_blank" rel="noreferrer noopener" alt="logo">
                </NavLink>


                <Typography variant="title" className={classes.flex} />

                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="search"
                        label="Поиск"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </form>

                <Button>Login</Button>
            </Toolbar>
        </div>

    );
};


export default withStyles(styles)(Header);
