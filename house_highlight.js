const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('house_highlight.csv');

const writeNTimes = (writer, data, encoding, callback) => {
  let i = 30000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 30000000) {
        writer.write(`id,house_id,highlight_id\n`, encoding, callback);
      } else {
        let index = 30000000 - i;
        let highlight_id = index;
        let house_id = Math.ceil(index/3);
        ok = writer.write(`${index},${house_id},${highlight_id}\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
};

writeNTimes(writeStream, faker.lorem.word());
