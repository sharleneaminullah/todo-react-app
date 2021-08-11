# Node.js backend for ToDo App
## Server
## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Go to the following directory

`cd todo-react-app\server`

Installation:

`npm install`  

To Start Server:

`npm start`  

To Start Server and Client together `cd server` then run the following command

`npm run dev`

Access the server on:

`http://localhost:5002`

Install MongoDB locally and start the MongoDB server.

`"C:\Program Files\MongoDB\Server\<mongo_db_version_number>\bin\mongo.exe"`

- 1) Start MongoDB without access control.

`mongod --port 27017 --dbpath /data/db`
- 2) Connect to the instance.

`mongo --port 27017`
- 3) Create the user administrator (in the admin authentication database).

`use admin
db.createUser(
  {
    user: "myUserAdmin",
    pwd: "abc123",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)`
- 4) Re-start the MongoDB instance with access control.

`mongod --auth --port 27017 --dbpath /data/db`
- 5) Connect and authenticate as the user administrator.

`mongo --port 27017 -u "myUserAdmin" -p "abc123" --authenticationDatabase "admin"`
## Technologies

- `cors`: is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- `express`: is a back end web application framework for Node.js
- `mongoose` : is an Object Data Modeling (ODM) library for MongoDB and Node.
- `nodemon`: is a tool that helps develop node. js based applications by automatically restarting the node application
- `concurrently`: allows to run multiple commands concurrently.(e.g. runnign client and server with one command)
- `uuid`

# Client

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Start Server and Client together

`npm run dev`

To Visit App on desktop:

`http://localhost:3000/`

## Technologies & Libraries

- `React`
- `uuid`: Random unique id generator
- `Bootstrap`
- `react-datepicker`:
- `moment.js`
- `react-bootstrap-table-next`
- `react-bootstrap-table2-paginator`
- `react-bootstrap-table2-toolkit`
- `prettier`
- `NPM` – package manager
- `Create-react-app` – for project build setup
- `Jest`
- `@testing-library/react`
- `react-test-renderer`
- `@testing-library/jest-dom`
- `@testing-library/user-event`
- www.JSBEN.CH – function performance test

I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in building the optimal algorith for the game. In the next iteration I plan on fixing the `module-resolver` & `VSCode intellisense` issue. Add "highest score" display feature.



