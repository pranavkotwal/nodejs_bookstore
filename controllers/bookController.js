const Book = require('../models/Book');
const logger = require('../config/logger')

// GET /api/books - Retrieve all books from the database
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    logger.error('Error retrieving books:', error);
    res.status(500).send('Error retrieving books from the database');
  }
};

// GET /api/books/:id - Retrieve a specific book by its ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).send('Book not found');
    } else {
      res.json(book);
    }
  } catch (error) {
    logger.error('Error getting this book:', error);
    res.status(500).send('Error retrieving book from the database');
  }
};

// POST /api/books - Create a new book in the database
const createBook = async (req, res) => {
  try {
    const newBook = req.body;
    const book = await Book.create(newBook);
    res.status(201).json(book);
  } catch (error) {
    logger.error('Error creating book:', error);
    res.status(500).send('Error creating book in the database');
  }
};

// PUT /api/books/:id - Update an existing book by its ID
const updateBook = async (req, res) => {
  try {
    const updatedBook = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, updatedBook, { new: true });
    if (!book) {
      res.status(404).send('Book not found');
    } else {
      res.json(book);
    }
  } catch (error) {
    logger.error('Error updating book:', error);
    res.status(500).send('Error updating book in the database');
  }
};

// DELETE /api/books/:id - Delete a book by its ID
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(404).send('Book not found');
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    logger.error('Error deleting book:', error);
    res.status(500).send('Error deleting book from the database');
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
