import React from "react";

const CreateQuestion = ({ titleQ, text, creationDate, author, tag, onCreateQuestion, onChange }) => (
    <div>
        <h1 class="text bg-info">Ask Question</h1>
        <p class="text-info">Fill in the requested info</p>
        <div>
            <label>Title: </label>
            <input value={titleQ} onChange={ e => onChange("titleQ", e.target.value)} />
            <br />
            <label>Text: </label>
            <input value={text} onChange={ e => onChange("text", e.target.value)} />
            <br />
            <label>Creation Date: </label>
            <input value={creationDate} onChange={ e => onChange("creationDate", e.target.value)} />
            <br />
            <label>Author: </label>
            <input value={author} onChange={ e => onChange("author", e.target.value)} />
            <br />
            <label>Tag: </label>
            <input value={tag} onChange={ e => onChange("tag", e.target.value)} />
            <br />
            <button type="button" class="btn btn-info" onClick = {onCreateQuestion}>Create!</button>
        </div>
    </div>
);

export default CreateQuestion;
