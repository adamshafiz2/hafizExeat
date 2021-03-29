import { createContext, useReducer, useState } from "react"
import studentReducer from "../reducers/studentReducer"



export const StudentContext = createContext()


const StudentContextProvider = ({ children }) => {
    const [students, dispatch]= useReducer(studentReducer, [])

    const [bg, setBg] =useState(true)

    return (
       <StudentContext.Provider value={{students, dispatch, bg, setBg}}>
           { children }
       </StudentContext.Provider>
    )
}

export default StudentContextProvider;
