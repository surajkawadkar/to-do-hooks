import React, { useState } from "react";



function ToDo() {

    const [element, setElement]= useState("");
    const [bucket,setBucket]= useState([]);

    // Helper function
    function addElement() {

        const item = {
            id:Math.floor(Math.random()*1000),
            value:element
        };

        setBucket(oldList =>[...oldList,item]);
        setElement("");
        
    }

    function deleteElement(id){
        const newArray = bucket.filter(item=>item.id!==id)
        setBucket(newArray)
    }
    return(
        <div>
            <h1>ToDo List</h1>
            <input type="text"
            placeholder="enter the element"
            value={element}
            onChange={e=>setElement(e.target.value)}>
            </input>
            <button type="button" onClick={addElement}>Add</button>
         
            <ul>

                {bucket.map(item=>{
                    return(
                        <li key= {item.id} > {item.value}   <button onClick={()=>deleteElement(item.id)} >❌</button></li>

                    )
                })}
            </ul>

        </div>
        




    )
}
export default ToDo;