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
                <div className="col-md-3">
                    <button onClick={()=>handleList()} className="btn btn-danger">Registered Volunteer List</button>
                    <br></br>
                    <button onClick={()=>handleTask()} className="btn btn-primary">Add Task</button>
                </div>
                <div className="col-md-9">
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