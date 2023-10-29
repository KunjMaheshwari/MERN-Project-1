import Axios from "axios";
import {useEffect, useState} from "react";
import StudentListRow from "./StudentListRow";


function StudentList(){
    const [arr, setArr] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/studentRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[])
    const ListItems = ()=>{
        return arr.map((val, ind)=>{
            return <StudentListRow obj={val}></StudentListRow>
        })
    }
    return (
        <table class="table table-bordered table-striped table-success">
            <thead>
                <tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Roll Number</th>
                    <th class="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}

export default StudentList;