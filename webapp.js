//Require express
const express = require ("express");

//app object
const app = express();

//const port = 8002;
let port = process.env.PORT;

// adding links of contact and bio page in home page with html code
app.get("/", function(req, res) {
  // Create an HTML page with links to the "Contact" and "Bio" pages
  const homePage = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Node.js Web Site</title>
    </head>
    <body>
      <h1>Welcome to my first Node.js web site.</h1>
      <p>Visit the following pages:</p>
      <ul>
        <li><a href="/contact">Contact</a></li><br>
        <li><a href="/bio">Bio</a></li>
      </ul>
    </body>
    </html>
  `;
  res.send(homePage);
});

//main page
app.get("/", function(req,res) {
	res.send ("Welcome to my first Node.js web site.");
});

//contact page
app.get("/contact", function(req,res) {
	res.send ("My name is Deekshit and my contact details are <br><br> phone: +91 8897991231 <br><br> Email: stylistardeekshit@gmail.com ");
});

//bio page
app.get("/bio", function(req,res){
    res.send ("I'm a indian student persuing masters in ohio franklin university. <br><br> I got good score in my previous semister and now i'm applaying for college shcolarship <br><br> Now i'm doing a web app based project using node js");
});

if (port == null || port == "") {
  port = 8002;
}
app.listen(port);

//app.listen(8002)