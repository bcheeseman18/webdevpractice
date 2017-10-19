let express = require('express'); 
let app = express(); 




app.get("/", function(req, res) {
    res.send('Hi There!'); 
});

app.get("/bye", function(req, res) {
    res.send('Bye!'); 
});

app.get("/dog", function(req, res) {
    res.send('Meow!'); 
});

app.get("/r/:subredditName", function(req, res) {
    let subreddit = req.params.subredditName; 
    res.send('Welcome to the ' + subreddit.toUpperCase() + ' page!!'); 
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    console.log(req.params); 
    res.send('Welcome to the comments page'); 
});


app.get("*", function(req, res) {
    res.send('YOU ARE A STAR'); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('The Server Has Started!!!')
}); 