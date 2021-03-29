import { useState } from "react"
import AddStudent from "./AddStudent";
import NavBar from "./NavBar";
function Main() {
    const [show, setShow] = useState(false)
   
    const toggle= () => {
        setShow(!show)
    }
    return(
        <main className="contain">
       <NavBar show={show} toggle={toggle}/>
      {show && <AddStudent />}
        </main>
    )
    
}
export default Main;