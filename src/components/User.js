import { useEffect, useState } from "react";

const User = ({name}) => {

    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(() =>{
        //API calls
        const timer = setInterval (() => {
            //console.log("Namaste React OP")
        }, 1000);
        //console.log("useEffect");

        return () => {
            clearInterval(timer);
            //console.log("useEffect return");

        }
    }, []);
    //console.log("Render");

    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Mississauga</h3>
            <h4>Contact: JoyceDsouza01</h4>

        </div>
    )
};

export default User;