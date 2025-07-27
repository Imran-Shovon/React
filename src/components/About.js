import { Component } from 'react';
import User from './User';
import UserContext from '../utils/UserContext';
import UserClass from "./UserClass";
import { useContext } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        // console.log("Parent Constructor called");
    }
    componentDidMount() {
        // console.log("Parent ComponentDidMount called");
    }

    render() {

        // console.log("ParentRender called");
        const { count } = this.state;
        return (
            <div className="mx-4 cursor-pointer my-4 p-4  flex flex-col items-center border-black rounded-lg shadow-lg bg-gray-100 ">
                <div>
                    <div>
                        loggedInUser: 
                        <UserContext.Consumer>
                            {({loggedInUser}) => <h1 className='text-xl font-bold'>{loggedInUser}</h1> }
                        </UserContext.Consumer>
                    </div>
                    <h1 className="font-bold text-2xl my-2">Here is details of the Developer</h1>
                </div>
                <UserClass name={"Shovon"} location={"Dhaka"}/>
            </div>
        )
    }
}
export default About;


// const About = () => {
//     return (
//         <div className="about">
//             <h1>About Us</h1>
//             <UserClass name={"Shovon"} location={"Dhaka"}/>
//             <UserClass name={"Shovon"} location={"Dhaka"}/>
//         </div>
//     )
// }
// export default About;