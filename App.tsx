import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import Navigators from './src/navigators/Navigators';
import store from './src/redux/store';
import {dbSQLite} from './src/database';
import {createTableListTodo, createTableTask} from './src/database/createTable';

const App = () => {
  useEffect(() => {
    dbSQLite
      .then((db) => {
        db.transaction((tx) => {
          //create Table Task
          tx.executeSql(createTableTask, [], (_tx, results) => {
            console.log('create table task', results.rowsAffected);
            //create Table ListTodo
            _tx.executeSql(createTableListTodo, [], (__tx, resultsTodo) => {
              console.log('create table listTodo', resultsTodo.rowsAffected);
            });
          });
        });
      })
      .catch((err) => {
        console.log('err create table', err);
      });
  }, []);

  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
};

export default App;
