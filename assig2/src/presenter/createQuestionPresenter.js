import model from "../model/model";

class CreateQuestionPresenter {
    onCreateQuestion() {
        model.addQuestion(model.state.newQuestion.titleQ, model.state.newQuestion.text, model.state.newQuestion.creationDate, model.state.newQuestion.author,model.state.newQuestion.tag);
        model.changeNewQuestionProperty("titleQ", "");
        model.changeNewQuestionProperty("text", "");
        model.changeNewQuestionProperty("creationDate", "");
        model.changeNewQuestionProperty("author", "");
        model.changeNewQuestionProperty("tag", "");
        window.location.assign("#/list-questions");
    }

    onChange(property, value){
        model.changeNewQuestionProperty(property, value);
    }
}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;