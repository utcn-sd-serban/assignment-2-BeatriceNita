import React, { Component } from "react";
import model from "../model/model";
import FilterQuestions from "./FilterQuestions";
import questionsListPresenter from "../presenter/questionsListPresenter";

const mapModelStateToComponentState = modelState => ({
    titleQ: modelState.newQuestion.titleQ
});

export default class SmartFilterQuestions extends Component {
    constructor() {
        super();
        this.state = mapModelStateToComponentState(model.state);
        this.listener = modelState => this.setState(mapModelStateToComponentState(modelState));
        model.addListener("change", this.listener);
    }

    componentWillUnmount() {
        model.removeListener("change", this.listener);
    }

    render() {
        return (
            <FilterQuestions
                onFilterQuestions={questionsListPresenter.onFilterQuestions}
                titleQ={this.state.titleQ} />
        );
    }
}