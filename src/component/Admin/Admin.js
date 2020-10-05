import React, { useState } from 'react';
import AddTask from './AddTask';
import VolunteerList from './VolunteerList';

const Admin = () => {
    const[state,setState]=useState(false);
    const handleList =()=>{
        setState(false)
    }
    const handleTask=()=>{
        setState(true)
    }
    return (
        <div className="container">
            <div className="row">
                
                <div className="col-md-5">
                    <button onClick={()=>handleList()} className="btn btn-danger">Registered Volunteer List</button>
                    <br></br><br></br>
                    <button onClick={()=>handleTask()} className="btn btn-primary">Add Task</button>
                    <br></br>
                    <img style={{width:"90%"}} src="https://i.ibb.co/MNQXb5G/dreamstime-s-51218280.jpg" alt=""></img>
                </div>
                <div className="col-md-7">
                <img src="https://i.ibb.co/KmyJR2R/Group-1329.png" style={{minWidth:'20%',maxWidth:'30%'}} alt=""></img>
                   {
                    !state && <VolunteerList></VolunteerList>

                   }
                    {
                    state && <AddTask></AddTask>
                   }
                </div>
            </div>
            
        </div>
    );
};

export default Admin;