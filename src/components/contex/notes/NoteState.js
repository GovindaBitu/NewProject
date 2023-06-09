    import React, { useState } from "react";
    import NoteContext from "./noteContex";


    const NoteState = (props)=>{
    const  s1= {
           "name": "Govinda",
            "class": "5b"
        } 
        const[state, setState] = useState(s1);
      const  update = ()=>{
            setTimeout(()=>{
                setState({
                    "name": "Bitu",
                     "class": "10d"
                })
            },1000)
        }
        return(
            <NoteContext.Provider  value={{state, update}}>
                {props.children}
            </NoteContext.Provider>
        )
    }

    export default NoteState;