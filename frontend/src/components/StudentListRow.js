import Axios from "axios";

function StudentListRow(props) {
    const {_id, name, email, rollNo} = props.obj; // Object destruction
    const handleClick = () => {
        Axios.delete("http://localhost:4000/studentRoute/delete-student/" + _id)
        .then((res)=>{
            if(res.send === 200){
                alert("Record deleted successfully");
                window.localtion.reload();  
            }else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td>
                <button class="btn btn-success">
                    Edit
                </button>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}


export default StudentListRow;