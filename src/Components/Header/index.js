import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'red',
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        COVID-19 UPDATE
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

