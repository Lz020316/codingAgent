import { defineEventHandler, createError } from 'h3';
import Todo from '../../../models/Todo.js';
import User from '../../../models/User.js';
import TodoFile from '../../../models/TodoFile.js';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  
  try {
    const todo = await Todo.findByPk(id, {
      include: [User, TodoFile]
    });
    
    if (!todo) {
      throw createError({ statusCode: 404, statusMessage: 'Todo not found' });
    }
    
    return todo;
  } catch (error) {
    throw createError({ statusCode: 500, statusMessage: 'Failed to fetch todo' });
  }
});
