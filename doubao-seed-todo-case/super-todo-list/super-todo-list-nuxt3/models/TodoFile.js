import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.config.js';
import Todo from './Todo.js';

const TodoFile = sequelize.define('TodoFile', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mimetype: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Define relationships
Todo.hasMany(TodoFile);
TodoFile.belongsTo(Todo);

export default TodoFile;
