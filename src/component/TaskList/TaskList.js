import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../../fakeData';

const TaskList = (props) => {
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [tasks,setTasks]=useState([]);
    const history = useHistory();
   
   useEffect(() =>{
       fetch  ('https://volunteer-server-parijat.herokuapp.com/tasks?email='+loggedInUser.email)
       .then(res=>res.json())
       .then(data=>{
           setTasks(data);
           
       });

      
      
   },[])

  
   function deleteTask(id){
   console.log(id)    
      
   fetch (`https://volunteer-server-parijat.herokuapp.com/delete/${id}`,{
       method: 'DELETE',
       headers: { 'Content-Type': 'application/json'},
       body: JSON.stringify({id})
   })
   .then (result=>result.json())
   .then (result=>{
    
        fetch  ('https://volunteer-server-parijat.herokuapp.com/tasks?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setTasks(data);
            
        });
 
       
       
   
   })
   }


    return (
        <div className="container">
            <div className="row">
               
           
           {    
               
                tasks.map(tk=><div style={{margin:"3px"}} className=" col-md-4 card bg-primary text-white text-center p-3">
               <blockquote class="blockquote mb-0">
                 <p>{tk.task}</p>
                 <img style={{width:"50%"}}src="https://i.ibb.co/zX9rPGc/f0cec0e065b1bccda5f769e7eb39620b.png" alt=""></img>
                 <footer class="blockquote-footer text-white">
                   <small>
                    Happening on <cite title="Source Title">{(new Date(tk.selectedDate).toDateString('dd/MM/yyyy'))}</cite>
                   </small>
                   
                 </footer>
                 <button onClick={()=>deleteTask(tk._id)} className="btn btn-danger">Delete Task</button>
               </blockquote>
             </div>)

           }
        </div></div>
    );
};

export default TaskList;