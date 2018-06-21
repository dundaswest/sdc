const faker = require('faker');
const Pool = require('pg').Pool;
const config = {
  host:'localhost',
  database:'jamie'
};
const pool = new Pool(config);

async function createHostT() {
  const response = await pool.query('CREATE TABLE Host(id SERIAL PRIMARY KEY, name VARCHAR(30) not null,pictureUrl VARCHAR(100) not null)');
}


async function InsertHostT() {
  const name = faker.name.findName();
  const pictureUrl = faker.image.avatar();
  const response = await pool.query(`INSERT INTO Host(name, pictureurl) VALUES ('${name}','${pictureUrl}')`);
}


//createHostT();
InsertHostT();
/*
INSERT INTO table(column1, column2, …)
VALUES
 (value1, value2, …);
 */
