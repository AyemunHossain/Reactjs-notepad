import {
  List, ListItem,
  ListItemText,
  Typography,
  Drawer,
  Avatar,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import CustomStyling from './CustomStyling';

const SideDrawer = () => {
    const classes = CustomStyling();
    const history = useHistory();
    const urlLocation = useLocation();
    const manuItems = [
      {
        text: "My Notes",
        icon: <SubjectOutlined color="secondary" />,
        path: "/",
      },
      {
        text: "Create Notes",
        icon: <AddCircleOutlined color="secondary" />,
        path: "/create",
      },
    ];

    return (
      <>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.root}>
            <Avatar className={classes.largeAvatar} src="notelogo.jpg" />
            <Typography style={{ marginTop: '20px' }} variant="h4">
              Note
            </Typography>
          </div>

          <List>
            {manuItems &&
              manuItems.map((manuItem, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => {
                    history.push(manuItem.path);
                  }}
                  className={
                    urlLocation.pathname == manuItem.path
                      ? classes.active
                      : null
                  }
                >
                  <listItemItem>{manuItem.icon}</listItemItem>
                  <ListItemText
                    primary={manuItem.text}
                    className={classes.listItem}
                  />
                </ListItem>
              ))}
          </List>
        </Drawer>
      </>
    );
}

export default SideDrawer
