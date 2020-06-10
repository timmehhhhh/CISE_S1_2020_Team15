var searchFieldVal="";

const express = require('express');
const app = new express();

app.get('/',function(request, response){
    response.sendFile('./main_page.html');
})

// const {Client} = require('pg');
// const connectionString = 'postgres://wiucfmzirbegqr:9624d9c375c7f9c8bc973d6396545a3a3d789e6e73a73df5e5bbb1ed519fe234@ec2-23-20-129-146.compute-1.amazonaws.com:5432/dbh1gu7tl09u8';

// const client = new Client({
//     connectionString: connectionString,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

//     client.connect();
//     //client.query('SELECT DISTINCT * FROM source WHERE title LIKE \'%Empirical%\'', (err, res) => {
//     client.query('SELECT s.title, array_to_string(array_agg(a.last_name), \',\') AS "Authors" FROM source s INNER JOIN authorsrc ass ON s.id = ass.source_id INNER JOIN author a ON a.id = ass.author_id WHERE s.title LIKE \'%Empirical%\' GROUP BY s.title', 
//      (err, res) => {
         
//     console.log(err, res);
//     client.end();
// })

function setValueField(){
    var e = document.getElementById('searchFields').value;
    
    var dropdownStr = '<select id="valueDropdown" name="valueDropdown" ></select>';
    var inputStr = '<input id="valueInput" name="valueInput">';

    var options;
    var str=""

    if(e == 1|| e == 2 || e == 3){
        document.getElementById('value').innerHTML = inputStr;

        if(e==1) searchFieldVal = "article title";
        else if(e==2) searchFieldVal = "article source";
        else searchFieldVal = "Author";
    }
    else{
        document.getElementById('value').innerHTML = dropdownStr;
        
        if(e == 4){
            searchFieldVal = "software engineering method";            
            options = ["TDD","BDD","Pair Programming","Planning Poker","Daily Standup Meetings","Story Boards",
            "User Story Mapping","Continuous Integration", "Retrospectives", "Burndown Charts","Requirements Prioritisation", "Version Control", "Code Sharing"];
        }
        else if(e == 5){
            searchFieldVal = "software engineering methodology";            
            options = ["Scrum", "Waterfall", "Spiral", "XP", "Rational Unified Process", "Crystal", "Clean room", "Feature Driven Development", 
            "Model Driven Development", "Domain Driven Development", "Formal methods", "Problem Driven Development", "Cloud computing", "Service Oriented Development", 
            "Aspect Oriented Development", "Valuse Driven Development", "Product Driven Development", "Agile"];
        }
        else{
            options = [];
        }
    
        for(var option of options){
            str+="<option>" + option + "</option>"
        }    
    }


    document.getElementById('valueDropdown').innerHTML = str;
}

function getQuery(){
    var str="";

    var desc = document.getElementById('description').value;
    str += "Description: "+desc+"<br>";

    var startdate = document.getElementById('startdate').value;
    var enddate = document.getElementById('enddate').value;
    str += "Date from "+startdate+" to "+enddate+"<br>";

    str += "If  "+searchFieldVal+"<br>";

    // document.getElementById('queryVal').innerHTML = str;    
}