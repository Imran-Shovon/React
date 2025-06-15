import User from "./User";
import UserClass from "./UserClass";
import { Component } from 'react';

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