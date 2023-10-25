import StudentForm from "./StudentForm";
import { useState } from "react";
import Axios from "axios";

function CreateStudent() {

    const [arr, setArr] = useState([]);

    // Here we are declaring a argumented function
    const getState = (childData) => {
        setArr(childData);
    }

    const handleSubmit = () => {
        const data = { name: arr[0], email: arr[1], rollNo: arr[2] };
        Axios.post("http://localhost:4000/studentRoute/create-student", data)
        .then((res) => {
            if (res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err) => alert(err));
    }

return (
    <form onSubmit={handleSubmit}>
        <StudentForm getState={getState} />
    </form>
)
}

export default CreateStudent;