import React, { useEffect, useState } from 'react';

const VolunteerList = () => {
    const [volunteer,setVolunteer]= useState([])
    useEffect(() =>{

    fetch  ('https://volunteer-server-parijat.herokuapp.com/volunteers')
    .then(res=>res.json())
    .then(data=>setVolunteer(data))

    },[])

    const handleDelete=(id)=>{
        fetch (`https://volunteer-server-parijat.herokuapp.com/volunteerDelete/${id}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        })
        .then (result=>result.json())
        .then (result=>{
         
             fetch  ('https://volunteer-server-parijat.herokuapp.com/volunteers')
             .then(res=>res.json())
             .then(data=>{
                 setVolunteer(data);
                 
        });
 
       
       
   
    })
    }
    return (
        <div>
            <h5>This is Volunteer List</h5>
            <ul className="list-group">
           {

           volunteer.map(vl=><li className="list-group-item">Name: {vl.name} <br></br>  Email: {vl.email}<br></br>Joined on: {(new Date(vl.selectedDate).toDateString('dd/MM/yyyy'))}<br></br><button onClick={()=>handleDelete(vl._id)} className="btn btn-danger">Delete</button> </li>)
           }
           </ul>
        </div>
    );
};

export default VolunteerList;