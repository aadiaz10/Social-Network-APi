# Social-Network-APi
Module 18
Social Network API
Description
This is a RESTful API for a social network web application, where users can share thoughts, react to friends' thoughts, and manage friend lists. The API uses Express.js for routing, MongoDB for the database, and Mongoose for the ODM.

Table of Contents
Installation
Usage
API Routes
Technologies
License
Installation
Clone the repository:

bash
Copy code
git clone (https://github.com/aadiaz10/Social-Network-APi)
Install dependencies:

bash
Copy code
npm install
Start MongoDB locally:

bash
Copy code
mongod
Start the server:


API Routes
Users
GET /api/users: Get all users.
GET /api/users/:userId: Get a single user by ID.
POST /api/users: Create a new user.
PUT /api/users/:userId: Update a user by ID.
DELETE /api/users/:userId: Delete a user by ID (and associated thoughts).
Thoughts
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:thoughtId: Get a single thought by ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:thoughtId: Update a thought by ID.
DELETE /api/thoughts/:thoughtId: Delete a thought by ID.
Reactions
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction by ID.
Friends
POST /api/users/:userId/friends/:friendId: Add a friend.
DELETE /api/users/:userId/friends/:friendId: Remove a friend.

This project is licensed under the MIT License.
