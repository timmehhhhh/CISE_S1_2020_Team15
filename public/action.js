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

    // str += "If  "+searchFieldVal+"<br>";

    document.getElementById('queryVal').innerHTML = str;    
}