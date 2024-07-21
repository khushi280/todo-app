Project Overview:
This Todo application is built using Node.js/Nest.js as the backend framework and MongoDB as the NoSQL database. It provides a RESTful API with CRUD (Create, Read and Delete) endpoints for managing tasks. The project includes optional user authentication and authorization, search functinality, and unit tests to ensure code quality.

Features:-

Task Management: Create, read,  and delete tasks.
User Authentication: Optional user authentication and authorization.
Search functinality: Comprehensive search for the todos.
Unit Testing: Unit tests to ensure code quality and functionality.

Prerequisites:-
Node.js (v14.x or later)
MongoDB (v4.x or later)
npm (v6.x or later)


Clone the repository:
git clone https://github.com/khushi280/todo-app.git

Install dependencies:
cd frontend
npm install
npm start


Set up environment variables:

Create a .env file in the root directory and add the following variables:

env

MONGO_URI=Your mongo url
GMAIL_USERNAME=Your gmail username
GMAIL_PASSWORD=Your app password
PORT=8000
JWT_SECRET=thisisasecretkey


To set up the backend
npm install
node server.js


The application should now be running on http://localhost:3000.

API Documentation
The base URL for all endpoints is http://localhost:8001/api.

Authentication
Register User
Endpoint: /user/register

Method: POST

Description: Register a new user.

Request Body:

json

{
    "username": "newuser",
    "password": "password"
}
Responses:

201 Created: User successfully registered.
400 Bad Request: Invalid input data.
Login User
Endpoint: /user/login

Method: POST

Description: Authenticate a user and return a JWT token.

Request Body:

json

{
    "username": "existinguser",
    "password": "password"
}
Responses:

200 OK: Authentication successful, returns a JWT token.
401 Unauthorized: Invalid credentials.
Forgot Password
Endpoint: /forgotPassword

Method: POST

Description: Initiates the password reset process.

Request Body:

json

{
    "email": "user@example.com"
}
Responses:

200 OK: Reset link sent to the provided email.
400 Bad Request: Invalid email format.
404 Not Found: Email not found in the system.
Task Management
Create Task
Endpoint: /task

Method: POST

Description: Create a new task.

Request Body:

json

{
    "title": "New Task",
    "description": "This is a new task",
    "dueDate": "2024-07-21T00:00:00Z"
}
Responses:

201 Created: Task created successfully.
400 Bad Request: Invalid input data.
Get All Tasks
Endpoint: /task
Method: GET
Description: Retrieve all tasks.
Responses:
200 OK: Returns a list of tasks.
500 Internal Server Error: An error occurred while retrieving tasks.
Get a Single Task
Endpoint: /task/:id

Method: GET

Description: Retrieve a task by ID.

URL Parameters:

id (string): The ID of the task.
Responses:

200 OK: Returns the task.
404 Not Found: Task not found.

Delete a Task
Endpoint: /task/:id

Method: DELETE

Description: Delete a task by ID.

URL Parameters:

id (string): The ID of the task.
Responses:

200 OK: Task deleted successfully.
404 Not Found: Task not found.
Error Handling
All endpoints will return appropriate HTTP status codes and error messages for invalid requests, authentication failures, or server issues.

Running Tests
To run the unit tests, use the following command:
npm run test


**Screenshots**


![image](https://github.com/user-attachments/assets/ad206672-0666-4e54-b26f-2964c9bcfbd9)

![image](https://github.com/user-attachments/assets/6eb8cf3c-b6a9-4955-9a8a-eefe5fe82082)

![image](https://github.com/user-attachments/assets/ed44c256-1605-4004-8e96-f9a38d24be95)

![image](https://github.com/user-attachments/assets/b4063435-6eec-452b-8e42-80de8e3c36b8)

![image](https://github.com/user-attachments/assets/fd8556c0-79bc-4f51-8b0e-8c3a1109c92c)





Contributing
If you would like to contribute to this project, please fork the repository and create a pull request with your changes. Make sure to update tests as appropriate.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Deployed Link
https://todo-app-git-main-khushi280s-projects.vercel.app/

Feel free to reach out if you have any questions or need further assistance. Enjoy building with the Todo application!
