import React, { useContext, useState } from 'react';
import { Link, Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from '../../App';

const TaskContent = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const history = useHistory();
    
    const { TaskID } = useParams();
    const { register, handleSubmit, watch, errors,  } = useForm();
    const selectedTask = fakeData.find(pd => pd.id == TaskID);
  
  
    const onSubmit = (data) =>{ 
      
        
      
        fetch('https://volunteer-server-parijat.herokuapp.com/addTask',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({...data,selectedDate})
        })
        .then(res =>res.json())
        .then(history.push('/taskList'))
        
      
      };
    

    return (
        <div className="container">
            <div className="row" >
                <div className="col-md-12  d-flex flex-row justify-content-center">
                    <div className="col-md-8">

                        <h2 className="text-left">Register As A Volunteer</h2> <hr></hr>
                        
                        <form onSubmit={handleSubmit(onSubmit)} >
    
      
     
    <input className="form-control" name="name" defaultValue={loggedInUser.name}  placeholder="Your Name" ref={register({ required: true })} />
    {errors.name && <span className="error">Name is required</span>}<br></br>
    
    
    <input name="email" className="form-control" defaultValue={loggedInUser.email}  placeholder="Your Email" ref={register({ required: true })} />
    {errors.email && <span className="error">Email is required</span>}<br></br>
   
    
    <input className="form-control" name="description" placeholder="Description" ref={register({ required: true })} />
    {errors.description && <span className="error">Description is required</span>}<br></br>
    
    <input className="form-control" name="task" defaultValue={selectedTask.title} placeholder="Enter Task Name" ref={register({ required: true })} />
    {errors.task && <span className="error">Task is required</span>}<br></br>
    
    <label htmlFor="fromDate">Select Date</label>
    <br></br>
   <DatePicker name="fromDate" 
    selected={selectedDate}
    onChange={date=>setSelectedDate(date)}
    dateFormat='dd/MM/yyyy'
    placeholder="Choose a date"
    minDate={new Date()}
    isClearable
     /><br></br>
    
    
      <input style={{ width:'50%',backgroundColor:"red",color:"white",fontSize:"22px",borderRadius:"15px"}} type="submit" />
       
       
       
  </form>

                    </div>

                    <div className="col-md-4"></div>

                    <img style={{ width: "auto" }} src={selectedTask.picture} alt=""></img>
                </div>
            </div>
          

        </div>
    );
};

export default TaskContent;