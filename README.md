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
![Screenshot 2023-06-20 at 2 30 31 PM](https://github.com/pranavkotwal/nodejs_bookstore/assets/49470242/e2850481-df28-4180-b601-43608c2dfde8)
 - **Endpoint**: GET /api/items
 - **Description**: Retrieves all books from the database.
 - Response: JSON array of books.

### Retrieve a specific book by ID
![Screenshot 2023-06-20 at 2 32 07 PM](https://github.com/pranavkotwal/nodejs_bookstore/assets/49470242/0f7dab86-1160-456f-9751-d03a3dadb5a6)

 - **Endpoint**: GET /api/items/:id
 - **Description**: Retrieves a specific book by its ID.
 - **Parameters**:
   - id: The ID of the book.

### Status codes:
- 200: Success.
- 404: Book not found.
- 500: Error retrieving book from the database.
### Create a new book
![Screenshot 2023-06-20 at 2 33 10 PM](https://github.com/pranavkotwal/nodejs_bookstore/assets/49470242/8b572189-33b4-4b92-9983-12f851d665a4)

- **Endpoint**: POST /api/items
- **Description**: Creates a new book in the database.
- Request body: JSON object representing the new book.
- Response: JSON object of the created book.
### Status codes:
- 201: Book created successfully.
- 500: Error creating book in the database.
### Update an existing book by ID
- **Endpoint** : PUT /api/items/:id
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

![Screenshot 2023-06-20 at 2 34 36 PM](https://github.com/pranavkotwal/nodejs_bookstore/assets/49470242/4787391c-d78d-4fc4-b0e8-e0d9e8fa7b62)
**Endpoint**: DELETE /api/items/:id
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
