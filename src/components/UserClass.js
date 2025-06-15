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
        const { name, location, avatar_url, company } = this.state.userInfo;
        // console.log(name + "Child Render called");
        return (
            <div className=" border border-solid leading-8 border-black p-4 m-4 rounded-lg shadow-lg bg-gray-50 hover:bg-gray-300 flex flex-col items-center">
                <img className='w-80 rounded-3xl mb-5' src={avatar_url} alt="User Avatar" />
                <h3 className='text-xl font-bold'>Name: {name}</h3>
                <p>Company Name: {company}</p>
                <p>Location: {location}</p>
                <p>Mobile: 01776752696</p>
                <p>Contact: shovonbiswas.cse@gmail.com</p>
            </div>
        )
    }
}

export default UserClass;