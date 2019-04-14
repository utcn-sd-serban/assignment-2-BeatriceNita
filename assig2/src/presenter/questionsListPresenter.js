

class QuestionsListPresenter {
   onCreateQuestion(){
    window.location.assign("#/create-question");
   }

   onListQuestions(){
    window.location.assign("#/list-questions");
   }

   onFilterQuestions(){
      window.location.assign("#/filter-questions");
     }  

}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;