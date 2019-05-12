import { EventEmitter } from "events";

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
                titleQ: "Help",
                text: "I need to solve some errors",
                creationDate: "24/03/2019",
                author: "John",
                tag: "Java"
            }, {
                titleQ: "Bug",
                text: "I need to solve a bug in my code",
                creationDate: "24/03/2019",
                author: "Andy",
                tag: "Python"
            }],
            newQuestion: {
                titleQ: "",
                text: "",
                creationDate: "",
                author: "",
                tag: ""

            },
            searchQuestions:{},
            toSearch:""
        };
    }


    addQuestion(titleQ, text, creationDate, author, tag) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                titleQ: titleQ,
                text: text,
                creationDate: creationDate,
                author: author,
                tag: tag
            }])
        };
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }

    changeToSearch(property, value) {
        this.state = {
            ...this.state,
           [property]:value
        };
        this.emit("change", this.state);
    }

    findByTitle(){ 
        debugger;
        const result=this.state.questions.filter(post=>post.titleQ===this.state.toSearch)
        this.state = {
     ...this.state,
     searchQuestions:result
        };
    }

    updateQuestions(questions) {
        this.state = {
            ...this.state,
            questions: questions
        }
        this.emit("change", this.state);
    }
}

//singleton
const model = new Model();

export default model;