const fs = require('fs');
const faker = require('faker');

const writeStream = fs.createWriteStream('totalHouse.csv');

const writeNTimes = (writer, data, encoding, callback) => {
  let i = 10000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 10000000) {
        writer.write(`id,property_type,title,location,num_guests,num_beds,num_views,num_baths,num_rooms,studio,score,description_title,days_from_last_update,minimumstay,checkin_start_time,checkout_time,description_comment,host_id,highlights_id,cancellation_id,house_rules_id,amenities_id\n`, encoding, callback);
      } else {
        let property_type = faker.lorem.word();
        let title = faker.lorem.word();
        let location = faker.lorem.word();
        let num_guests = faker.random.number({min: 1,max: 5});
        let num_beds = faker.random.number({min: 1,max: 5});
        let num_views = faker.random.number({min: 1,max: 50});
        let num_baths = faker.random.number({min: 1,max: 5});
        let num_rooms = faker.random.number({min: 1,max: 5});
        let studio = faker.random.boolean();
        let score = faker.random.number({min: 1,max: 25});
        let description_title = faker.lorem.word();
        let days_from_last_update = faker.random.number({min: 1,max: 100});
        let minimumstay = faker.random.number({min: 1,max: 5});
        let checkin_start_time = faker.random.number({min: 8,max: 12});
        let checkout_time = faker.random.number({min: 8,max: 12});
        let description_comment = faker.lorem.sentence();
        let host_id = faker.random.number({min: 1,max:  40000});
        let highlights_id = faker.random.number({min: 1,max:  90000});
        let cancellation_id = faker.random.number({min: 1,max:  9000});
        let house_rules_id = faker.random.number({min: 1,max:  10000});
        let amenities_id = faker.random.number({min: 1,max: 20});
        let index = 10000000 - i ;
        ok = writer.write(`${index},${property_type},${title},${location},${num_guests},${num_beds},${num_views},${num_baths},${num_rooms},${studio},${score},${description_title},${days_from_last_update},${minimumstay},${checkin_start_time},${checkout_time},${description_comment},${host_id},${highlights_id},${cancellation_id},${house_rules_id},${amenities_id}\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}
let property_type = faker.lorem.word();
let title = faker.lorem.word();
let location = faker.lorem.word();
let num_guests = faker.random.number({min: 1,max: 5});
let num_beds = faker.random.number({min: 1,max: 5});
let num_views = faker.random.number({min: 1,max: 50});
let num_baths = faker.random.number({min: 1,max: 5});
let num_rooms = faker.random.number({min: 1,max: 5});
let studio = faker.random.boolean();
let score = faker.random.number({min: 1,max: 25});
let description_title = faker.lorem.word();
let days_from_last_update = faker.random.number({min: 1,max: 100});
let minimumstay = faker.random.number({min: 1,max: 5});
let checkin_start_time = faker.random.number({min: 8,max: 12});
let checkout_time = faker.random.number({min: 8,max: 12});
let description_comment = faker.lorem.sentence();
let host_id = faker.random.number({min: 1,max:  40000});
let highlights_id = faker.random.number({min: 1,max:  100000});
let cancellation_id = faker.random.number({min: 1,max:  9000});
let house_rules_id = faker.random.number({min: 1,max:  900000});
let amenities_id = faker.random.number({min: 1,max: 20});

writeNTimes(writeStream, `${property_type},${title},${location},${num_guests},${num_beds},${num_views},${num_baths},${num_rooms},${studio},${score},${description_title},${days_from_last_update},${minimumstay},${checkin_start_time},${checkout_time},${description_comment},${host_id},${highlights_id},${cancellation_id},${house_rules_id},${amenities_id}\n`);
