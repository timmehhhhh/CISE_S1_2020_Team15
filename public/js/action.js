var querySelection = ["name of Field","Article title","Article source","Author","SE Method","SE Methodology"];
var operationSelection = ["operator","doesnotcontain","beginswith","endswith","isequalto","islessthan","islessthanorequalto","ismorethan","ismorethanorequalto"];
var noQuery = 0;
var quote = '"';

var openOption = "<option>";
var closeOption = "</option>";

function selectQuery(){
    var searchID = "searchFields"+noQuery;
    var operatorID = "operator"+noQuery;
    var valueID = "value"+noQuery;

    var doc = document.getElementById('queryVal');
    var htmlStr = "If <select id="+quote+searchID+quote+" onchange="+quote+"setValueField("+noQuery+")"+quote+">"; 
    noQuery++;
    for(qkey in querySelection){
        htmlStr+=openOption+querySelection[qkey]+closeOption;
    }
    htmlStr +="</select><select id="+quote+operatorID+quote+">";

    for(okey in operationSelection){
        htmlStr+=openOption+operationSelection[okey]+closeOption;
    }
    htmlStr+="</select><span id="+quote+valueID+quote+"></span><br>";
    doc.insertAdjacentHTML('beforeend',htmlStr);
}

function setValueField(nQuery){
    var e = document.getElementById('searchFields'+nQuery).value;
    var dropdownID = "valueDropdown"+nQuery;
    var inputID = "valueInput"+nQuery;
    var valueID = "value"+nQuery;

    var dropdownStr = "<select id="+quote+dropdownID+quote+">";
    var inputStr = '<input id="'+inputID+'">';

    var options;
    str = "";

    if(e == 'Article title'|| e == 'Article source' || e == 'Author'){
        str = inputStr;

        // if(e==1) searchFieldVal = "article title";
        // else if(e==2) searchFieldVal = "article source";
        // else searchFieldVal = "Author";
    }
    else{
        str = dropdownStr;
        var options = [];
        
        if(e == 'SE Method'){
            options = ["TDD","BDD","Pair Programming","Planning Poker","Daily Standup Meetings","Story Boards","User Story Mapping","Continuous Integration", "Retrospectives", "Burndown Charts","Requirements Prioritisation", "Version Control", "Code Sharing"];
        }
        else if(e == 'SE Methodology'){
            searchFieldVal = "software engineering methodology";            
            options = ["Scrum", "Waterfall", "Spiral", "XP", "Rational Unified Process", "Crystal", "Clean room", "Feature Driven Development", "Model Driven Development", "Domain Driven Development", "Formal methods", "Problem Driven Development", "Cloud computing", "Service Oriented Development", "Aspect Oriented Development", "Valuse Driven Development", "Product Driven Development", "Agile"];
        }
    
        for(key in options){
            str+= openOption+options[key]+closeOption;
        }    
        str+="</select>";
    }
    document.getElementById(valueID).innerHTML = str;
}

function getQuery(){
    var str="";

    var desc = document.getElementById('description').value;
    str += "Description: "+desc+"<br>";

    var startdate = document.getElementById('startdate').value;
    var enddate = document.getElementById('enddate').value;
    str += "Date from "+startdate+" to "+enddate+"<br>";

    // str += "If  "+searchFieldVal+"<br>";

    document.getElementById('results').innerHTML = str;    
}