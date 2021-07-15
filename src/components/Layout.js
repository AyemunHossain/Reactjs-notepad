import CustomStyling from'../components/CustomStyling';
import Appbar from "./Appbar";
import SideDrawer from './SideDrawer';

const Layout = (props) => {
    const classes = CustomStyling()
    return (
      <div className={classes.root}>
        {/* app bar */}
        <Appbar />

        {/* side drawer */}
        <SideDrawer/>

        <div className={classes.page}>
          {/* <div className={classes.toolbar}></div> */}
          {props.children}
        </div>
      </div>
    );
};

export default Layout
