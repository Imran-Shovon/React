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
            <div className="about">
                <h1>About class Component</h1>
                <h2>This is a React Course</h2>
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