import { useEffect, useState } from "react";
const User = ({name}) => {
    const [count, setCount] =useState(0);
    const [count2] =useState(1);

    useEffect(() => {
        // console.log("useEffect called");
        // const timer = setInterval(() => {
        //     setCount((c) => c + 1);
        // }, 1000);
        // console.log("useEffect called", count);

        return () => {
            console.log("useEffect cleanup called");
            clearInterval(timer);
        }
    }, []);
    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Count: {count2}</h2>
            <h2>Name: {name}</h2>
            <h2>This is React Course.</h2>
            <h2>Contact: shovonbiswas.cse@gmail.com</h2>
        </div>
    )
}

export default User;