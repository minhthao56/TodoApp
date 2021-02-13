import Realm from 'realm';

const UserSchema = {
  name: 'User',
  primaryKey: 'localId',
  properties: {
    id: 'int?',
    localId: 'int', // primary key
    name: 'string',
    email: 'string',
    password: 'string',
    forgotPassword: 'string',
    avatar: 'data?',
    isSync: {type: 'bool', default: false},
  },
};

const TaskSchema = {
  name: 'Task',
  primaryKey: 'localId',
  properties: {
    id: 'int?',
    localId: 'int', // primary key
    userId: 'int',
    title: 'string',
    description: 'string',
    listTodo: {type: 'list', objectType: 'ListToDo'},
    image: 'data',
    isSync: {type: 'bool', default: false},
    isDelete: {type: 'bool', default: false},
    isComplete: {type: 'bool', default: false},
  },
};

const ListToDoSchema = {
  name: 'ListToDo',
  primaryKey: 'localId',
  properties: {
    id: 'int?',
    localId: 'int', // primary key
    content: 'string',
    isComplete: {type: 'bool', default: false},
    isSync: {type: 'bool', default: false},
    isDelete: {type: 'bool', default: false},
    taskId: 'int',
  },
};

const config = {
  schema: [UserSchema, TaskSchema, ListToDoSchema],
  path: 'todoApp.realm',
};

export const insertUser = async (user: any) => {
  try {
    const realm = await Realm.open(config);
    realm.create('User', user);
  } catch (error) {
    console.log(error);
  }
};
