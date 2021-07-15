import { makeStyles } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

const drawerWidth = 200

const CustomStyling = makeStyles((theme) => {
    return {
  page: {
    background: "#",
    width: "100%",
    marginTop: theme.spacing(10)
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
  listItem: {
    paddingLeft: theme.spacing(3)
  },
  appbar:{
    width:`calc(100% - ${drawerWidth}px)`,
    display:"flex",
    background: grey,
  },
  toolbar: theme.mixins.toolbar,
  logoText:{
    paddingLeft: theme.spacing(2)
  },
  date:{
    flexGrow:1
  },
  avatar:{
    marginLeft: theme.spacing(1.2)
  },
    largeAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },  
}})

export default CustomStyling
