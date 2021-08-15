// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const addHead = require("./add_head");

app.get("/", (request, response) => {
  const head = addHead("Home");
  response.send(head + `
    <body>
        <h1>My portfolio</h1>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  const head = addHead("Contact");
  response.send(head + `
    <body>
        <h1>Contact</h1>
        <ul>
        <li>Facebook</li>
        <li>LinkedIn</li>
        <li>Instagram</li>
        </ul>
    </body>
  `);
});

app.get("/education", (request, response) => {
  const head = addHead("Education");
  response.send(head + `
    <body>
        <h1>Education</h1>
        <p>This is an education page</p>
    </body>
  `);
});

app.get("/skills", (request, response) => {
  const head = addHead("Skills");
  response.send(head + `
    <body>
        <h1>Skills</h1>
        <p>This is a skills page</p>
    </body>
  `);
});

app.get("/projects", (request, response) => {
  const codeUrl = "https://github.com/Jul-S/hyf-homework/blob/master/html-css/week3/index.html";
  const previewUrl = "https://htmlpreview.github.io/?";
  const head = addHead("Projects");
  response.send(head + `
    <body>
        <h1>Projects</h1>
        <ul>
        <li>
        <h3>Sign Up Form</h3>
        <iframe class="previewUrl codeUrl" width=1000 height=500 src=${previewUrl + codeUrl} title="Form Sign Up"></iframe>
        <img/> 
        </li>
        <li>My Project 2</li>
        <li>My Project 3</li>
        </ul>
    </body>
  `);
});

app.get('/test-report', function (requset, response) {
  response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
