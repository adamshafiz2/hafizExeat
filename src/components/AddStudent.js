import {useContext, useState} from "react"
import { StudentContext } from "../context/StudentContext"

const AddStudent = () => {
    const { dispatch } = useContext(StudentContext)
    const [name, setName] = useState();
    const [level, setLevel] = useState();
    const [date, setDate] = useState();
    const [indexNo, setIndexNo] = useState();

    const onsubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "addStudent", payload: {name, level, date, indexNo} });
    }

    return (
        
            
            <form onSubmit={onsubmit} >
                <input className="form-control form-control-lg" 
                type="text" placeholder="students name"
                style={{border:"none", borderBottom:"2px solid teal"}}
                 onChange={(e)=> setName(e.target.value)}/>

                <input className="form-control form-control-lg" 
                type="number" placeholder="students level"
                style={{border:"none", borderBottom:"2px solid teal"}}
                 onChange={(e)=> setLevel(e.target.value)}/>

                <input type="date" placeholder="exeat date"
                style={{border:"none", borderBottom:"2px solid teal"}}
                 onChange={(e)=> setDate(e.target.value)}/>

                <input className="form-control form-control-lg"
                 type="text" placeholder="index number"
                 style={{border:"none", borderBottom:"2px solid teal"}}
                  onChange={(e)=> setIndexNo(e.target.value)}/>

                <button className="btn btn-success"
                style={{border:"none", borderBottom:"2px solid yellowgreen"}}
                >ADD</button>
            </form>
            
    )
}

export default AddStudent
