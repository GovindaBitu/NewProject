    import React from "react";
    import NoteContext from "./noteContex";


    const NoteState = (props)=>{
    const  state= {
           " name":"Govinda",
            "class":"5b"
        }
        return(
            <NoteContext.Provider  value={state}>
                {props.children}
            </NoteContext.Provider>
        )
    }

    export default NoteState;