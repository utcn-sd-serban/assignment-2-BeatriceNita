import model from "../model/model";

class QuestionsListPresenter {
   onCreateQuestion() {
      window.location.assign("#/create-question");
   }

   onListQuestions() {
      window.location.assign("#/list-questions");
   }

   onFilterQuestions() {
      window.location.assign("#/filter-questions");
   }

   onFilteredQuestions(){
      model.findByTitle();
      window.location.assign("#/filter-questions-yes");
   }

   changeToSearch(property, value){
      model.changeToSearch(property, value);

    }

}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;