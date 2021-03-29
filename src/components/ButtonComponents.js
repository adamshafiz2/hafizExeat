import {useContext} from "react"
import {StudentContext} from "../context/StudentContext"

function ButtonComponents() {

    const { setBg, bg } = useContext(ThemeContext)
    return (
        <button onClick={()=>setBg(!bg)}>TOGGLE</button>
            
        
    )
}

export default ButtonComponents
