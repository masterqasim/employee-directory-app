import React,{useEffect,useState}  from 'react'
import EmployeeItem from './EmployeeItem'

export default function EmplyeeList() {
    const [empData,setEmpData] = useState([2,3])
    useEffect(()=>{
        getDate()
    },[])
    const getDate = ()=> {
        //api call
    }
    return (
        <div>
            {empData.map((e,i)=>{
                return <EmployeeItem key={i} data={e}/>
            })}       
        </div>
    )
}
