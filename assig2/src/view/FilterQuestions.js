import React from "react";

const FilterQuestions = ({ titleQ, onFilterQuestions, onChange }) => (
    <div>
        <h2>Filter Questions</h2>
        <div>
            <label>Title to search: </label>
            <input value={titleQ} onChange={ e => onChange("titleQ", e.target.value)} />
            <br />
            <button onClick = {onFilterQuestions}>Search</button>
        </div>
    </div>
);

export default FilterQuestions;
