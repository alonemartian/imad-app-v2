//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    //create request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState ===XMLHttpRequest.DONE){
            if(request.status=== 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //make request
    request.open('GET','http://alonemartian.imad.hasura-app.io/counter',true);
    request.send(null);
   
};