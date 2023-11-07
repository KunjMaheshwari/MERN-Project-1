import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";

function EditStudent(){
    const {id} = useParams();
    // alert(id);

    const [initialValue, setInitialValue] = useState({name:"", email:"", rollNo:""});
    
    const [newData, setNewData] = useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:4000/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name, email, rollNo} = res.data;
                setInitialValue({name, email, rollNo});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id])

    const getState = (childData) =>{
        setNewData(childData);
    }
    const handleSubmit=()=>{
        const data ={name: newData[0], email:newData[1], rollNo:newData[2]}
        Axios.put("http://localhost:4000/studentRoute/updateStudent/"+id, data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record upload successfully")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue={initialValue.name} emailValue={initialValue.email} rollNoValue={initialValue.rollNo}></StudentForm>
        </form>
    )
}

export default EditStudent;