import React, { Component } from "react";
import modelUser from "../model/modelUser";
import Login from "./Login";
import usersLoginPresenter from "../presenter/usersLoginPresenter";

const mapModelStateToComponentState = modelState => ({
    username: modelState.newUser.username,
    password: modelState.newUser.password
});

export default class SmartLogin extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(modelUser.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        modelUser.addListener("change", this.listener);
    }

    componentWillUnmount() {
        modelUser.removeListener("change", this.listener);
    }

    render() {
        return (
            <Login
                onLogin={usersLoginPresenter.onLogin}
                onChange={usersLoginPresenter.onChange}
                username={this.state.username} 
                password={this.state.password}/>
        );
    }
}