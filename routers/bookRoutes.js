const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// GET /api/books - Retrieve all books from the database
router.get('/', bookController.getAllBooks);

// GET /api/books/:id - Retrieve a specific book by its ID
router.get('/:id', bookController.getBookById);

// POST /api/books - Create a new book in the database
router.post('/', bookController.createBook);

// PUT /api/books/:id - Update an existing book by its ID
router.put('/:id', bookController.updateBook);

// DELETE /api/books/:id - Delete a book by its ID
router.delete('/:id', bookController.deleteBook);

module.exports = router;
