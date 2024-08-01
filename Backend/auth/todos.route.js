// routes/todoRoutes.js
import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todo.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/', protectRoute, createTodo); // Create a new to-do
router.get('/', protectRoute, getTodos);    // Get all to-dos for the authenticated user
router.put('/:id', protectRoute, updateTodo); // Update a specific to-do by ID
router.delete('/:id', protectRoute, deleteTodo); // Delete a specific to-do by ID

export default router;
