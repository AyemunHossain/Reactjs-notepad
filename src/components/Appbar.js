import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar  from '@material-ui/core/Toolbar';
import CustomStyling from './CustomStyling';
import { Avatar, Typography } from '@material-ui/core';
import { format } from "date-fns";

const Appbar = (props) => {
    const classes = CustomStyling()
    return (
      <>
        <AppBar elevation={0.8} className={classes.appbar}>
          <Toolbar>
            <Typography className={classes.date}>
              Today {format(new Date(), "do MMMM Y")}
            </Typography>

            <Typography>AH Ashik</Typography>
            <Avatar className={classes.avatar} src="profile-avatar.png" />
          </Toolbar>
        </AppBar>
      </>
    );
}

export default Appbar
