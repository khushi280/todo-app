Project Overview
This Todo application is built using Node.js/Nest.js as the backend framework and MongoDB as the NoSQL database. It provides a RESTful API with CRUD (Create, Read and Delete) endpoints for managing tasks. The project includes optional user authentication and authorization, search functinality, and unit tests to ensure code quality.

Features
Task Management: Create, read,  and delete tasks.
User Authentication: Optional user authentication and authorization.
Search functinality: Comprehensive search for the todos.
Unit Testing: Unit tests to ensure code quality and functionality.
Prerequisites
Node.js (v14.x or later)
MongoDB (v4.x or later)
npm (v6.x or later)
Installation
Clone the repository:

bash
Copy code
git clone 
cd todo-app
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

env
Copy code
MONGO_URI=mongodb://localhost:27017/todoapp
JWT_SECRET=your_jwt_secret
Run the application:

bash
Copy code
npm run start
The application should now be running on http://localhost:3000.

API Documentation
The API documentation is available at http://localhost:3000/api. It provides detailed information about all available endpoints, request/response formats, and example requests.

Usage
Create a Task
http
Copy code
POST /tasks
Content-Type: application/json

{
    "title": "New Task",
    "description": "This is a new task",
    "dueDate": "2024-07-21T00:00:00Z"
}
Get All Tasks
http
Copy code
GET /tasks
Get a Single Task
http
Copy code
GET /tasks/{id}
Update a Task
http
Copy code
PUT /tasks/{id}
Content-Type: application/json

{
    "title": "Updated Task",
    "description": "This task has been updated",
    "dueDate": "2024-07-22T00:00:00Z"
}
Delete a Task
http
Copy code
DELETE /tasks/{id}
Authentication
Register
http
Copy code
POST /auth/register
Content-Type: application/json

{
    "username": "newuser",
    "password": "password"
}
Login
http
Copy code
POST /auth/login
Content-Type: application/json

{
    "username": "newuser",
    "password": "password"
}
The login endpoint returns a JWT token, which should be included in the Authorization header for subsequent requests.

Running Tests
To run the unit tests, use the following command:

bash
Copy code
npm run test
Screenshots
Task List

Create Task

API Documentation

Contributing
If you would like to contribute to this project, please fork the repository and create a pull request with your changes. Make sure to update tests as appropriate.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to reach out if you have any questions or need further assistance. Enjoy building with the Todo application!
