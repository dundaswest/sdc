const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('amenities.csv');

const writeTwentyTimes = (writer, data, encoding, callback) => {
  let i = 21;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 20) {
        writer.write(`id,name,description\n`, encoding, callback);
      } else {
        data = `${faker.lorem.word()},${faker.lorem.sentence()}`;
        let index = 20 - i;
        ok = writer.write(`${index},${data}\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
};

writeTwentyTimes(writeStream, `${faker.lorem.word()},${faker.lorem.sentence()}`);
