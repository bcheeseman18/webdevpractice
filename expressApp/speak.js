let express = require('express'); 
let app = express(); 




app.get("/", function(req, res) {
    res.send('Welcome to my assignment!'); 
});

app.get("/speak/:animal", function(req, res) {
    let type = req.params.animal; 
    let sound = ""; 
    if(type === "pig") {
        sound = "oink"; 
    } else if (type === "cow") {
        sound = "moo"; 
    } else if(type === "dog") {
        sound = "woof woof"; 
    }
    res.send('The ' + type + ' says "' + sound + '"'); 
});


app.get("/repeat/:word/:num", function(req, res) {
    let word = req.params.word; 
    let num = Number(req.params.num); 
    let result = ''; 
    for(let i = 0; i < num; i++) {
        result += word + ' ';  
    }
    res.send(result); 
});

app.get("*", function(req, res) {
    res.send('Page not found'); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('The Server Has Started!!!')
}); 