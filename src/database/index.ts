import SQLite, {SQLiteDatabase} from 'react-native-sqlite-storage';

export const dbSQLite: Promise<SQLiteDatabase> = new Promise(
  (resolve, reject) => {
    SQLite.enablePromise(true);
    SQLite.DEBUG;
    SQLite.openDatabase({
      name: 'TodoDB.db',
      location: 'default',
      createFromLocation: '~www/TodoDB.db',
    })
      .then((db) => {
        resolve(db);
      })
      .catch((err) => reject(err));
  },
);
