import sequelize from './sequelize.config.js';
import User from './models/User.js';
import Todo from './models/Todo.js';
import TodoFile from './models/TodoFile.js';

async function initializeDatabase() {
  try {
    // Test the connection
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Sync the models with the database
    await sequelize.sync({ force: true }); // Use force: true to drop existing tables and recreate them
    console.log('Database and tables have been created successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    // Close the connection
    await sequelize.close();
  }
}

initializeDatabase();
