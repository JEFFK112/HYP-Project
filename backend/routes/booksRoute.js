import express from 'express';
import { bookCreate, deleteBook, getBookById, getBooks, updateBook } from '../controller/booksController.js';

const router = express.Router();

// Route create book
router.post('/', bookCreate);

// Route for get all books
router.get('/', getBooks);

// Route for get one book from database by id
router.get('/:id', getBookById);

// Route for update a Book
router.put('/:id', updateBook);

// Route for Delete a book
router.delete('/:id', deleteBook);

export default router;