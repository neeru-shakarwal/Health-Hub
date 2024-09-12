// // const mysql = require('mysql2/promise'); // Use the promise version of mysql2

// const connect = async () => {
//   try {
//       const connection = await mysql.createConnection({
//           host: 'localhost',
//           user: 'root',
//           password: '',
//           database: 'project',
//       });
//       console.log('Connected to the MySQL database');
//       return connection; // Return the connection object for reuse
//   } catch (err) {
//       console.error('Database connection error', err);
//       throw err; // Rethrow the error after logging it
//   }
// }

// module.exports = connect;
const mysql = require('mysql'); // Use the promise version of mysql2

const connect = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'healthhub',
    });
    console.log('Connected to the MySQL database');
    return connection; // Return the connection object for reuse
  } catch (err) {
    console.error('Database connection error', err);
    throw err; // Rethrow the error after logging it
  }
};

module.exports = connect;
