import React, { useContext } from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Home = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    
    return (
        <div>
          
  <Navbar style={{ background:"black"}} variant="dark">
    <Navbar.Brand><img style={{minWidth:'20%',maxWidth:'30%'}} src="https://i.ibb.co/KmyJR2R/Group-1329.png" alt=""></img></Navbar.Brand>
    <Nav className="mr-auto ">
   
    <Link style={{margin:"3px",fontSize:"14px",color:"white"}}  to="/">Home</Link>
      <Link style={{margin:"3px",fontSize:"14px",color:"white"}} to="/donation">Donation</Link>
      <Link style={{margin:"3px",fontSize:"14px",color:"white"}} to="/events">Events</Link>
      <Link style={{margin:"3px",fontSize:"14px",color:"white"}} to="/blog">Blogs</Link> 
      <Link style={{margin:"3px",fontSize:"14px",color:"white"}} to="/login">Login</Link> 
      <Link style={{margin:"3px",fontSize:"14px",color:"white"}} to="/taskList">TaskList</Link> 
      <Link style={{margin:"3px",fontSize:"18px",color:"orange"}}> Welcome {loggedInUser.email}</Link> 
    
    </Nav>
    <Form inline>
    <Link to="/admin"><button style={{margin:"5px"}} className="btn btn-success">Admin</button></Link>
   
    
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button    variant="outline-info">Search</Button>
    </Form> 
  </Navbar>
  <br />


  
 
        </div>
    );
};

export default Home;