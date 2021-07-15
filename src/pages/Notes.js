import NoteCard from "../components/NoteCard";
import { useState, useEffect } from "react";
import { Grid, Container, Typography } from "@material-ui/core";
import Masonry from "react-masonry-css";

export default function Notes() {
  const [note, setNote] = useState([]);
  useEffect(() => {
    fetchAllNotes();
  }, []);
  
  //fetch all data from 
  const fetchAllNotes = async () => {
    const response = await fetch("http://localhost:8000/notes", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    setNote(data);
  };

  //Delete any note from db
  const deleteHandeler = async(id)=>{
    await fetch(`http://localhost:8000/notes/${id}`,
    {
      method:"DELETE",
    });

    const restOfNote = note.filter((note)=>
      note.id != id)

      setNote(restOfNote)
  }
  
  //custom breakpoints
  const breakPoints = {
    default: 4,
    800:1,
    1150:2,
    1599:3,
    1600:4,
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Find Your Notes
      </Typography>

      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {note &&
          note.map((note, index) => (
            <NoteCard
              note={note}
              index={index}
              deleteHandeler={deleteHandeler}
            />
          ))}
      </Masonry>
    </Container>
  );
}
