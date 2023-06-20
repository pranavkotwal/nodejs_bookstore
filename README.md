# Node.js Express API with MongoDB
This is a Node.js API built with Express.js and MongoDB for managing books. It provides endpoints for retrieving, creating, updating, and deleting books in the database.

## Project File Structure

## Folder Structure 
```
nodejs_bookstore
    |------ config
    |         └--- mongo.js

    |------ controllers
    |         └--- bookControllers.js
    |------ models
              └--- Books.js
    |------ routers
    |         └--- bookRoutes.js
    |------ .gitignore
    |------ index.js
    |------ package.json
    |------ package-lock.json
    └------ README.md


## How-To-Use

- Clone this project
- Start by installing npm and mongoDB
- Run the Mongo Server.
- Navigate to Project Directory
    ```
    cd nodejs_bookstore
    ```
- run following commands :
    ```
    npm install 
    ```
    ```
    npm start
```   



# API Endpoints
The following endpoints are available in this API:

### Retrieve all books
 - **Endpoint**: GET /api/books
 - **Description**: Retrieves all books from the database.
 - Response: JSON array of books.

### Retrieve a specific book by ID
 - **Endpoint**: GET /api/books/:id
 - **Description**: Retrieves a specific book by its ID.
 - **Parameters**:
   - id: The ID of the book.

### Status codes:
- 200: Success.
- 404: Book not found.
- 500: Error retrieving book from the database.
### Create a new book
- **Endpoint**: POST /api/books
- **Description**: Creates a new book in the database.
- Request body: JSON object representing the new book.
- Response: JSON object of the created book.
### Status codes:
- 201: Book created successfully.
- 500: Error creating book in the database.
### Update an existing book by ID
- **Endpoint** : PUT /api/books/:id
- **Description**: Updates an existing book by its ID.
- **Parameters**:
   - id: The ID of the book.
   - Request body: JSON object containing the updated book data.
   - Response: JSON object of the updated book.
## Status codes:
- 200: Success.
- 404: Book not found.
- 500: Error updating book in the database.
## Delete a book by ID
- **Endpoint**: DELETE /api/books/:id
- **Description**: Deletes a book by its ID.
- **Parameters**:
  - id: The ID of the book.
  - Response: No content.
## Status codes:
- 204: Book deleted successfully.
- 404: Book not found.
- 500: Error deleting book from the database.
## Error Handling
All API endpoints handle errors and return meaningful error messages.
Internal server errors are logged to the console and a file for further investigation.