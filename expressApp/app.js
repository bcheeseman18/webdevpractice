let express = require('express'); 
let app = express(); 

app.get("/", function(req, res) {
    res.send('Hi There!'); 
}); 

app.listen(process.env.PORT, process.env.IP, function() {
    console.log('The Server Has Started!!!')
}); 