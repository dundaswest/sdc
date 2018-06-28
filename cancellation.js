const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('cancellation.csv');

const write = (writer, data, encoding, callback) => {
  let i = 10001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 10000) {
        writer.write(`id,cancellationType,cancellationSummary\n`, encoding, callback);
      } else {
        let cancellationType = `${faker.lorem.word()}`;
        let cancellationSummary = `${faker.lorem.sentence()}`;
        let index = 10000 - i;
        ok = writer.write(`${index},${cancellationType},${cancellationSummary}\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

write(writeStream, `${faker.lorem.word()},${faker.lorem.sentence()}`);
