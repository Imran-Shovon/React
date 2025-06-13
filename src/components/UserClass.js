import React from 'react';
import { GITHUB_USER_API } from "../utils/constants";


class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy User",
                location: "Unknown",
                avatar_url: "Photo"
            }
        }
        // console.log(this.props.name + "Child Constructor called");
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child ComponentDidMount called");
        const data = await fetch(GITHUB_USER_API)
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Child ComponentDidUpdate called");
    }

    componentWillUnmount() {
        console.log("Child ComponentWillUnmount called");
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        // console.log(name + "Child Render called");
        return (
            <div className="user-card">
                <img className='img' src={avatar_url} alt="User Avatar" />
                <h3>Name: {name}</h3>
                <p>Location: {location}</p>
                <p>Contact: shovonbiswas.cse@gmail.com</p>
            </div>
        )
    }
}

export default UserClass;