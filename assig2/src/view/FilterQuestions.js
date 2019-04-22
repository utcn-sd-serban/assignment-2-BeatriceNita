import React from "react";

const FilterQuestions = ({ titleQ, onFilterQuestions, onChange }) => (
    <div>
        <h1 class="text bg-primary">Filter Questions</h1>
        <div>
            <label>Title to search: </label>
            <input value={titleQ} onChange={ e => onChange("titleQ", e.target.value)} />
            <br />
            <button type="button" class="btn btn-primary" onClick = {onFilterQuestions}>Search</button>
        </div>
    </div>
);

export default FilterQuestions;
