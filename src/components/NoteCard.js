import {
  Card,
  CardHeader,
  Grid,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Avatar,
} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";

const CustomStyling2 = makeStyles((note)=>{
  return {
    noteBorder: {
      border: (note) => {
        if (note.category == "work") return "0.5px solid orange";
      },
    },
    avatar: {
      backgroundColor: (note) => {
        if (note.category == "work")
          return yellow[700]
        else if(note.category== "todos")
          return pink[700];
        else if(note.category=="money")
          return green[700];
        else
          return blue[700];
      },
    },
  };
})

const NoteCard = (props) => {

  const styling = CustomStyling2(props.note);

  return (
    <>
      <div item key={props.index}>
        <Card className={styling.noteBorder}>
          <CardHeader
            avatar={
              <Avatar className={styling.avatar}>
                {props.note.category[0]}
              </Avatar>
            }
            title={props.note.title}
            subheader={props.note.category}
            action={
              <IconButton onClick={() => props.deleteHandeler(props.note.id)}>
                <DeleteOutlined />
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.note.details}
            </Typography>
          </CardContent>

          <CardActions disableSpacing></CardActions>
        </Card>
      </div>
    </>
  );
};

export default NoteCard;
