import { Container,Toolbar,AppBar,Typography, } from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
function Index(){
 
  const classes= useStyles()
 
  return(
    <div className={classes.root}>

   <AppBar position="relative" color="secondary">
     <Toolbar ><Menu/></Toolbar>
   </AppBar>
     
       <div >
   <Container  maxWidth="sm"  >
   <Typography variant="h3" color="textPrimary" align="center" gutterBottom>
Welcome to Next JS Project
</Typography>
<Typography variant="h5" color="textSecondary" align="center">An initiative by Caravel Labs</Typography>

   </Container>
   </div>
   
   
 </div>
  )}
 
  const useStyles = makeStyles({
    root: {
      background: '#e3e3e3',
    },
  });

export default Index
