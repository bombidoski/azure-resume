const { response } = require("express");

const functionApi = '';

const gtwVisitCount = () => {
    let count = 30;
    fetch (functionApi).then(response => {
        return response.json();
    }).then(reponse => {
        console.log(reponse);
        count = response.count;
    } 