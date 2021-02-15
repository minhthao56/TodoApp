import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);
SQLite.DEBUG;
const db = SQLite.openDatabase(
  {
    name: 'SQLiteTodo.db',
    location: 'default',
    createFromLocation: '~www/SQLiteTodo.db',
  },
  () => {
    'open db';
  },
  (error) => {
    console.log(error);
  },
);
export default db;
