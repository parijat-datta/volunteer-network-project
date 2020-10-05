import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddTask = () => {
    const [tasks,setTasks]=useState([]);
    const [state,setState] = useState(false)
    
    const [selectedDate, setSelectedDate] = useState("");
    const { register, handleSubmit, errors,  } = useForm();
    useEffect(() =>{
        fetch  ('https://volunteer-server-parijat.herokuapp.com/taskList')
        .then(res=>res.json())
        .then(data=>{
            setTasks(data);
            
            
        });
 
       
       
    },[])
    const onSubmit = (data) =>{ 
      
        
      
        fetch('https://volunteer-server-parijat.herokuapp.com/adminTask',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({...data,selectedDate})
        })
        .then(res =>res.json())
        
            .then(data=>{
                if(data){
                    setState(true)
                }
            })
            .then(res=>{
                fetch('https://volunteer-server-parijat.herokuapp.com/taskList')
                .then(res=>res.json())
                .then(data=>setTasks(data))
                
        })      
      };
    
      const handleNew=()=>{
          setState(false)
      }


      const handleDelete=(id)=>{
        fetch (`https://volunteer-server-parijat.herokuapp.com/taskDelete/${id}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        })
        .then (result=>result.json())
        .then (result=>{
         
             fetch  ('https://volunteer-server-parijat.herokuapp.com/taskList')
             .then(res=>res.json())
             .then(data=>{
                 setTasks(data);
                 
        });
 
       
       
   
    })
    }
    return (
        <div>
            
            {!state&&<form onSubmit={handleSubmit(onSubmit)} >
    
      
     
    <input className="form-control" name="title"   placeholder="Task Type" ref={register({ required: true })} />
    {errors.title && <span className="error">Task Type or Name is required</span>}<br></br>
    
    <input className="form-control" name="description" placeholder="Description" ref={register({ required: true })} />
    {errors.description && <span className="error">Description is required</span>}<br></br>
    
    
    
    <input className="form-control" name="picture"  placeholder="Enter Hosted Image URL" ref={register({ required: true })} />
    {errors.picture && <span className="error">Enter Hosted Image URL</span>}<br></br>
    <label htmlFor="fromDate">Select Date: </label>
    <DatePicker name="fromDate" 
    selected={selectedDate}
    onChange={date=>setSelectedDate(date)}
    dateFormat='dd/MM/yyyy'
    placeholder="Choose a date"
    minDate={new Date()}
    isClearable
     /><br></br>
   
    
    
      <input style={{ width:'50%',backgroundColor:"red",color:"white",fontSize:"22px",borderRadius:"15px"}} type="submit" />
       
       
       
  </form>}
           


{state && <ul class="list-group"> <br></br>
<h5>All the Tasks</h5><hr></hr><button style={{fontSize:"24px",fontWeight:"bold"}} className="btn btn-warning" onClick={() =>handleNew()}>Add Another Task</button> {  
 
 tasks.map(tk=>  <li class="list-group-item">{tk.title}<br></br> <img style={{width:"30%",height:"230px",marginRight:"0"}} src={tk.picture} alt=""></img>
 <br></br><br></br><button className="btn btn-danger" onClick={()=>handleDelete(tk._id)}>Delete Task</button></li>



 )
}</ul>}
        </div>
    );
};

export default AddTask;