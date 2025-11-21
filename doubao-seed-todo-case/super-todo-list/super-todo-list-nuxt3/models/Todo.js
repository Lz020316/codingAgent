import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.config.js';
import User from './User.js';

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  dueDate: {
    type: DataTypes.DATE
  },
  priority: {
    type: DataTypes.ENUM('low', 'medium', 'high'),
    defaultValue: 'medium'
  },
  status: {
    type: DataTypes.ENUM('pending', 'in_progress', 'completed', 'cancelled'),
    defaultValue: 'pending'
  },
  isShared: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

// Define relationships
User.hasMany(Todo);
Todo.belongsTo(User);

export default Todo;
