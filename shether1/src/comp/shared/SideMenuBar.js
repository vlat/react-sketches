import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItem from "@material-ui/core/ListItem/ListItem";
import {NavLink} from "react-router-dom";
import List from "@material-ui/core/List/List";
import AndroidIcon from "@material-ui/icons/Android";
import PeopleIcon from "@material-ui/icons/People";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";


const styles = theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        color: '#3eab51',
    },
    listMenu: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    }

});


class SideMenuBar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false,
        };
    }


    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <div className={classes.listMenu}>
                    <List component="nav">
                        <ListItem>
                            <a
                                href="/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="sberbank-logo"
                                alt="logo"
                            > </a>
                        </ListItem>

                        <NavLink className="segments__dropdown_link" to="/accounts" activeClassName="active">
                        <ListItem button component="a" href="#user-list">
                            <ListItemIcon>
                                <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Список счетов" />
                        </ListItem>
                        </NavLink>

                        <NavLink className="segments__dropdown_link" to="/admin" activeClassName="active">
                        <ListItem button component="a" href="#admin-list">
                            <ListItemIcon>
                                <AndroidIcon />
                            </ListItemIcon>
                            <ListItemText primary="Страница администратора" />
                        </ListItem>
                        </NavLink>
                    </List>
                    {/* <Divider /> */}
                </div>

            </div>
        );

        return (
            <div>
                <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} aria-label="Menu">
                    <MenuIcon  />
                </IconButton>

                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>

            </div>
        );
    }
}

export default withStyles(styles)(SideMenuBar);