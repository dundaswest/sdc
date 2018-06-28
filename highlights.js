const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('highlights.csv');

const write = (writer, data, encoding, callback) => {
  let i = 30000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 30000000) {
        writer.write(`id,title,comment\n`, encoding, callback);
      } else {
        let data = `${faker.lorem.word()},${faker.lorem.sentence()}`;
        let index = 30000000 - i;
        ok = writer.write(`${index},${data}\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

write(writeStream, faker.lorem.word());
