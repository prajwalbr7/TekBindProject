import { useState,useEffect } from "react";
import TodosList from "../todosList/TodosList";
import './Todos.css'

const Todos=()=>{
    const [TodoData,setTodoData]=useState({
        dataStored:null,
        errorMessage:null
    })
    useEffect(()=>{
        const FetchData=async()=>{
            let api=`https://jsonplaceholder.typicode.com/todos`
            const response=await fetch(api);
            const responseData=await response.json();
            if(response.ok){
                
                setTodoData((prevApiResponse)=>({
                    ...prevApiResponse,
                    dataStored:responseData
                }))
            }else{
                setTodoData((prevApiResponse)=>({
                    ...prevApiResponse,
                    errorMessage:"Unauthorized Request"
                }))
            }
        }
        FetchData()
    } ,[])
    let {dataStored,errorMessage}=TodoData

    return(
       <div className="TodoMainContainer">
        <h2>Todos List</h2>
        {dataStored ? (
            <TodosList Data={dataStored} name="prajwal"/>
        ):(
            <strong>{errorMessage}</strong>
        )}
       </div> 
    )
}
export default Todos