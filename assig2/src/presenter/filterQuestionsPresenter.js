import model from "../model/model";

class CreateQuestionPresenter {

    onFilterQuestions() {
        window.location.assign("#/filter-questions");
    }
}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;