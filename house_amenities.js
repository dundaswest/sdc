const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('house_amenities.csv');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
const writeNTimes = (writer, data, encoding, callback) => {
  let i = 30000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 30000000) {
        writer.write(`id,house_id,amenity_id\n`, encoding, callback);
      } else {
        let index = 30000000 - i;
        let amenity_id = getRandomIntInclusive(1, 20);
        let house_id = Math.ceil(index/3);
        ok = writer.write(`${index},${house_id},${amenity_id}\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
};

writeNTimes(writeStream, faker.lorem.word());
