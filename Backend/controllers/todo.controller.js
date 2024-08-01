// controllers/todoController.js
import Todo from "../models/todos.model.js";

export const createTodo = async (req, res) => {
  const { title, description, completed } = req.body;
  const userId = req.user.id; // Make sure `req.user` is populated correctly

  try {
    const newTodo = new Todo({
      userId,
      title,
      description,
      completed,
    });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getTodos = async (req, res) => {
  const userId = req.user.id;

  try {
    const todos = await Todo.find({ userId });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
