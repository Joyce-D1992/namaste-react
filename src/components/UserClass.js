import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        console.log(props);

        // this.state = {
        //     count: 0,
        //     count2: 2,
        // };
        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Dafault",
            }
        };
        console.log(this.props.name +"Child Constructor");
    }

    // async componentDidMount() {
    //    // console.log(this.props.name +"Child Component Did Mount");
    //    // API calls

    //    const data = await fetch("https://api.github.com/users/Joyce-D1992");
    //    const json = await data.json();

    //    this.setState({
    //     userInfo: json,
    //    });

    //    console.log(json);
    // }
    
    componentDidMount () {

        this.timer = setInterval (() => {
            console.log("Namaste React OP")
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount() {

        clearInterval(this.timer);

        console.log("Component will unmount");
    }

    render() {
        
        //const {name,location} = this.props;
        // const {count, count2} = this.state;
       // const {count} = this.state;

        console.log(this.props.name +"Child Render");

        const {name,location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1> */}
                {/* <h1>Count2: {count2}</h1> */}
                {/* <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Count Increase</button> */}
                <img src = {avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: JoyceDsouza01</h4>
    
            </div>
        );
    };

};

export default UserClass;