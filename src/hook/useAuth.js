import React from "react"
import {Context} from "../context/authContext"

const useAuth = (setterOnly) => {
    
    const ctx = React.useContext(Context)

    return setterOnly ? [ctx.setState] : [ctx.state, ctx.setState]  
}
                
export default useAuth