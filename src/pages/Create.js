import React from 'react'
import { useState } from 'react';
import { Typography,Button,ButtonGroup,
          TextField,ThemeProvider,RadioGroup,
          FormControlLabel,Container, FormLabel, FormControl,} from '@material-ui/core'
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio'
import { useHistory } from 'react-router';

// const customTheme = createTheme({
//   palette:{
//     secondary:purple
//   },
//   typography:{
//     fontFamily: 'Oswald',
//     fontWeightExtraLight: 200,
//     fontWeightLight: 300,
//     fontWeightRegular: 400,
//     fontWeightMedium: 500,

//   }
// })

const style1 = makeStyles({
  field : {
    marginTop:20,
    marginBottom:20,
    marginRight:20,
    marginLeft:5,
    display:'block'
  }
})

export default function Create() {
  const classes = style1()
  const history = useHistory()
  const [title,setTitle] = useState('')
  const [details,setDetails] = useState('')
  const [category, setCategory] = useState('')
  const [titleErr,setTitleErr] = useState(false)
  const [detailsErr,setDetailsErr] = useState(false)
  const [categoryErr, setCategoryErr] = useState(false)
  const [disablesubmit, setdisablesubmit] = useState(false)
  
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  //submit and error handling
  const submitHandler =(e)=>{
    e.preventDefault()
    setTitleErr(false)
    setDetailsErr(false)
    setCategoryErr(false)
    setdisablesubmit(false)

    if (title && details && category ){
      addNote({title,details,category})
      setTitle("")
      setDetails("")
      setCategory("")
      setdisablesubmit(true)
      history.push("/")
    }
    else{
      if(title ==''){
        setTitleErr(true)
        setdisablesubmit(true)
      }
      if (category ==''){
        setCategoryErr(true)
        setdisablesubmit(true)
      }
      }
      if(details ==''){
        setDetailsErr(true)
        setdisablesubmit(true)
      }
    }

    //post request fetch
    const addNote = async(postData)=>{
      const request = await fetch("http://localhost:8000/notes",
        {
          method:"POST",
          headers: {
            'content-type':'application/json'
          },
          body:JSON.stringify(postData)
        })
        return request
      }

  return (
    <Container>
     <ThemeProvider>
      <form noValidate autoComplete="off" onSubmit={submitHandler}>
        <Typography variant="h2" 
        className={classes.field} 
      color="secondary"
      gutterBottom
      >
        Create Your Notes
      </Typography>

      <TextField 
      onChange={(e)=>{setTitle(e.target.value);setdisablesubmit(false)} } 
      className={classes.field} 
      id="outlined-basic" 
      label="title"
      fullWidth
      color="primary"
      variant="outlined" 
      required
      error={titleErr}
      />

        <TextField
        onChange={(e)=>{setDetails(e.target.value);setdisablesubmit(false)}} 
          className={classes.field} 
          label="Details"
          variant= "outlined"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsErr}
          />
        <FormControl error={categoryErr}>
          <FormLabel color="secondary"> Select category</FormLabel>
          <RadioGroup value={category} onChange={(e)=>{setCategory(e.target.value); setdisablesubmit(false)}}>
            <FormControlLabel control={<Radio/>} label="Money" value="money"/>
            <FormControlLabel control={<Radio/>} label="Todos" value="todos"/>
            <FormControlLabel control={<Radio/>} label="Reminder" value="reminder"/>
            <FormControlLabel control={<Radio/>} label="Work" value="work"/>
          </RadioGroup>
        </FormControl>


      <Button 
      disabled={disablesubmit}
      type="submit" 
      className={classes.field}  
      variant="outlined" 
     fullWidth
     >
      Submit
      </Button>
      </form>
    </ThemeProvider>
     {/* <ThemeProvider theme={customTheme}>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">

      <Button >
        Submit
      </Button>
      
      <Button >
        Submit 2
      </Button>

      <Button>
        Submit 3
      </Button>

      </ButtonGroup>

      </ThemeProvider> */}

    </Container>
  )
}
