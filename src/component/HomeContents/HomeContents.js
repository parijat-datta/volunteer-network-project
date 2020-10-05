import React, { useEffect, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData'
const HomeContents = () => {
const [tasks,setTasks]=useState([])
    useEffect(() =>{
        fetch('https://volunteer-server-parijat.herokuapp.com/taskList')
        .then(res=>res.json())
        .then(data=>setTasks(data))
    })

    
    return (
        <div>
            <h1>I GROW BY HELPING PEOPLE IN NEED</h1>

            <div className="container">
               <div className="row">

                   
           

{
                tasks.map(tasks => <div className="col-md-3">
                    
                    <Link to={`/yourTasks/${tasks.id}`}>
                    <Jumbotron>
                        <img style={{width:"90%"}} src={tasks.picture} alt=""></img>
                        <br/><br/>
                        <h6>{tasks.title}</h6>


                    </Jumbotron>
                    </Link>

                    


                </div>
                )
            }
            
            </div>


</div>
        </div>
    );
};

export default HomeContents;