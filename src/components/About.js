import React, { useContext} from "react";
import noteContext from "./contex/notes/noteContex";

const About =  () => {
    const a = useContext(noteContext)
    return ( 
        <div>
            This is About  {a.name}
            console.log("hello")
        </div>
     )
}

export default About  ;