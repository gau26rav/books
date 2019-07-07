import React,  {useState, useEffect} from 'react'

export default function Count(){

    const [count, setCount] = useState(0);
    const [vege, setVege] = useState("Brinjal");

  /*   useEffect(() => {
        console.log('Value in the mount and  ' + count + "Vege " + vege);
        return () => {
            console.log('Value in the unmount ' + count + "Vege " + vege);
        };
    },[count] ) */

    


    return(
        <div>
            <input type="button" onClick={(event)=>setCount(count+1)} value="Click to add"></input>
            <label>
                <label>{vege}</label>
                <input type="text" value={vege} onChange={(event)=>setVege(event.target.value)}/>
            </label>
        </div>
    );
}