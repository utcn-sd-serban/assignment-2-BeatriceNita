import React from "react";

const ChooseOpQuestions = ({ onCreateQuestion, onListQuestions, onFilterQuestions }) => (
    <div>
        <h2>Questions Operations</h2>
        <button onClick = {onCreateQuestion}>Ask Question</button>
        <button onClick = {onListQuestions}>List All Questions</button>
        <button onClick = {onFilterQuestions }>Filter Questions</button>
    </div>
);

export default ChooseOpQuestions;