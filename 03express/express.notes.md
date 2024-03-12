-------------------------------
node js core usage and understanding
npm usage
express
routes
responses
ejs, dynamic values
error handling
-------------------------------
template engine ---> ejs, pug, handlebars,jade

ejs setup

1) ejs install
npm i ejs

2) configure ejs

app.set("view engine", "ejs");

3) create views folder

4) crete ejs file inside views folder

5) instead of send do render
---------------------------------
static files

1) create a folder called public

2) create three folders inside it, images, stylesheets and javascripts

3) configure the express static in script.js file

4) undestand the path
-----------------------------------
express generator

1) npm i express-generator -g

2) express appname --view=ejs
------------------------------
mongodb
    dbs, models, schema, collections, documents

1) npm i mongoose

2) require and setup connection

3) make schema

4) create model and export
-------------------------------
session and cookies

    sessions --> when data store in server side
    cookies --> when data store in client side

    create sessions, using sessions across routes and destroying
    creating cookies, using it
--------------------------------
flash messages

1) npm i connect-flash

2) make sure you put connect flash in a app.use function

3) create flash in any route
--------------------------------
intermediate mongodb
    How can I perform a case-insensitive search in Mongoose? --> new RegExp("^[a-zA-Z0-9]+$", "i")
    How can I find documents where an array field contains all of a set of values? --> $all: ["science"]
    How do I search for documents with a specific data range in Mongoose?
    How can I filter documents based on the existence of a field in Mongoose?
    How can I filter documents based on a specific field in Mongoose?
------------------------------------
authentication and authorization

1) npm i passport passport-local passport-local-mongoose mongoose express-session

2) write app.js code first in app.js file and write it after view engine and before logger

3) setip users.js then properly

4) in indes.js try register first and then other codes as well
------------------------------------