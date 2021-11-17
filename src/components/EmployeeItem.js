import React from 'react'
import logo from '../../src/logo.svg';

export default function EmployeeItem() {
    return (
        <div style={{ width:'300px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around' }}>
            <img src={'https://randomuser.me/api/portraits/med/men/75.jpg'} style={{borderRadius:'50px'}}/>
            <p>Employee Name </p>
            <button>Edit</button>
            <button>delete</button>
            
        </div>
    )
}
