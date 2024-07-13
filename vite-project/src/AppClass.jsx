import React, { Component } from "react";
class AppClass extends React.Component
{
    constructor()
    {
        super() // to call constructor of parent class
        this.state =
        {
            name : "React"
        }
        // this.state.name = "React"
    }
    render(){
        return (
            <>
            <h5>This is a {this.state.name} class component</h5> 
            <button onClick={()=>{
                this.setState("React JS")
            }}>Update State</button>

            </>
           
        )
    }
}
export default AppClass