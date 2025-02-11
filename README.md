# contact-management
contact-management
A RESTful API for managing contacts, built with Node.js, Express.js, and MongoDB.

Features
Create, read, update, and delete (CRUD) contacts
Data validation with express-validator
Error handling with appropriate status codes
MongoDB integration using Mongoose
Unit testing with Jest & Supertest
Deployed on Heroku
Installation
Clone the repository:

sh
Copy
Edit
git clone https://github.com/your-username/contact-management.git
cd contact-management
Install dependencies:

sh
Copy
Edit
npm install
Create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the development server:

sh
Copy
Edit
npm start
Run tests:

sh
Copy
Edit
npm test
API Endpoints
Method	Endpoint	Description
GET	/contacts	Fetch all contacts
GET	/contacts/:id	Fetch a single contact
POST	/contacts	Create a new contact
PUT	/contacts/:id	Update a contact
DELETE	/contacts/:id	Delete a contact
Example Request (POST /contacts)
json
Copy
Edit
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890",
  "address": "123 Main St"
}
Example Response
json
Copy
Edit
{
  "id": "65f32a...",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890",
  "address": "123 Main St",
  "createdAt": "2025-02-10T12:34:56.789Z"
}
Deployment
Deploy to Heroku:
sh
Copy
Edit
git push heroku main
Set environment variables:
sh
Copy
Edit
heroku config:set MONGO_URI=your_mongodb_uri
License
This project is licensed under the MIT License.

