import React from 'react';
import fakeData from '../../fakeData'
const AddBulkData = () => {
  const handleData = ()=>{

    fetch('https://volunteer-server-parijat.herokuapp.com/addNewTask',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(fakeData)
    })
  }
    return (
        <div>
     <button onClick={handleData()}>Add All Data</button>        
        </div>
    );
};

export default AddBulkData;