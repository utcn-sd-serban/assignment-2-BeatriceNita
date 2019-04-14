import React from "react";

const ListAllQuestions = ({ questions }) => (
    <div>
        <h2>Questions</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Text</th>
                    <th>Creation Date</th>
                    <th>Author</th>
                    <th>Tag</th>
                </tr>
            </thead>
            <tbody>
                {
                    questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.titleQ}</td>
                            <td>{question.text}</td>
                            <td>{question.creationDate}</td>
                            <td>{question.author}</td>
                            <td>{question.tag}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
);

export default ListAllQuestions;