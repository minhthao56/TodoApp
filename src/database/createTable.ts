export const createTableTask = `CREATE TABLE IF NOT EXISTS task(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    title TEXT,
    description TEXT,
    image BLOB,isSync INTEGER,
    isDelete INTEGER,
    isComplete INTEGER,
    createAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )`;

export const createTableListTodo = `CREATE TABLE IF NOT EXISTS listTodo(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    content TEXT,
    isSync INTEGER,
    isDelete INTEGER,
    isComplete INTEGER,
    taskId INTEGER,
    createAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (taskId) REFERENCES task(id)
    )`;
