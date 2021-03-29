import {useContext} from "react"
import { StudentContext } from "../context/StudentContext"

function Students() {

    const {students, dispatch}= useContext(StudentContext)

    return (
        <table className="table table-sm  " style={{width: "100%" , display:"flex" , flexWrap:"wrap" , color:"white" , justifyContent:"center"  }}>
          {
              students.map((student)=>(
                  <tbody style={{border: "2px solid white", margin:"15px" , boxShadow:"0 0 2px 2px", width:"20%"}}>
                      <tr>
                    <th>NAME:</th>
                  <td>{student.name}</td>
                    </tr>
                    <tr>
                  <th>LEVEL:</th>
                  <td>{student.level}</td>
                  </tr>
                  <tr>
                  <th>DATE:</th>
                  <td>{student.date}</td>
                  </tr>
                  <button className="btn btn-danger" 
                  style={{width:"50%", display:"flex", marginLeft:"25%", justifyContent:"center"}}
                   onClick={()=>dispatch({type: "delete", indexNo: student.indexNo})} >
                      X
                  </button>
                  </tbody>
              ))
          }
        </table>
    )
}

export default Students
