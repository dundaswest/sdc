const fs = require('fs');
const faker = require('faker');
// 10000000
const writeStream = fs.createWriteStream('test2.csv');

const makeArray = () => {
  const title = faker.lorem.word();
  const comment = faker.lorem.sentence();
  const output = [{ title: faker.lorem.word(), comment: faker.lorem.sentence() }, { title: faker.lorem.word(), comment: faker.lorem.sentence() }, { title: faker.lorem.word(), comment: faker.lorem.sentence() }];
  return output;
};

const makeAmenities = () => {
  const output = [];
  const num = faker.random.number({ min: 1, max: 4 });
  const item = faker.lorem.word();
  const comment = faker.lorem.sentence();
  for (let i = 0; i < num; i++) {
    output.push({ item : faker.lorem.word(), comment : faker.lorem.sentence() });
  }
  return output;
};

const specialStayRangeArray = () => {
  const output = [];
  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const obj = {
      startDate: new Date(2018, 7 + count, faker.random.number({ min: 1, max: 15 })),
      endDate: new Date(2018, 7 + count + 1, faker.random.number({ min: 16, max: 30 })),
      nightsOfMinimumStay: faker.random.number({ min: 4, max: 6 }),
    };
    output.push(obj);
    count += 1;
    count += faker.random.number({ min: 1, max: 2 });
  }
  return output;
};
//2500000
const writeNTimes = (writer, data, encoding, callback) => {
  let i = 21;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 20) {
        const header = `id,host_name,host_picture_url,property_type,title,score,location,num_guests,num_rooms,num_beds,num_baths,num_views,highlights,studio,descriptionSummary,descriptions,amenities,smoking,pet_suitable,parties_or_events,no_safe_for_children_under,check_in_start_time,checkout_time,selfcheck_in_with_lockbox,rules_to_acknowledge,cancellation_type,cancellation_summary,nights_of_stay_vary,nights_of_minimum_stay,nights_of_minimumstay_for_date_range,days_from_last_update`
        writer.write(`${header}\n`, encoding, callback);
      } else {
        let host_name = faker.name.findName();
        let host_picture_url = faker.image.avatar();
        let property_type = faker.lorem.word();
        let title = faker.lorem.word();
        let score = faker.random.number({min: 1,max: 25});
        let location = faker.lorem.word();
        let num_guests = faker.random.number({min: 1,max: 5});
        let num_rooms = faker.random.number({min: 1,max: 5});
        let num_beds = faker.random.number({min: 1,max: 5});
        let num_baths = faker.random.number({min: 1,max: 5});
        let num_views = faker.random.number({min: 1,max: 50});
        let highlights = JSON.stringify(makeArray()).replace(/"/g, '""');
        let studio = faker.random.boolean();
        let descriptionSummary = faker.lorem.sentence();
        let descriptions = JSON.stringify(makeArray()).replace(/"/g, '""');
        let amenities = JSON.stringify(makeAmenities()).replace(/"/g, '""');
        let smoking = faker.random.boolean();
        let pet_suitable = faker.random.boolean();
        let parties_or_events = faker.random.boolean();
        let no_safe_for_children_under = faker.random.number({min: 1,max: 10});
        let check_in_start_time = faker.random.number({min: 8,max: 12});
        let checkout_time = faker.random.number({min: 8,max: 12});
        let selfcheck_in_with_lockbox = faker.random.boolean();
        let rules_to_acknowledge = faker.lorem.sentence();
        let cancellation_type = faker.lorem.word();
        let cancellation_summary = faker.lorem.sentence();
        let nights_of_stay_vary = faker.random.boolean();
        let nights_of_minimum_stay = faker.random.number({min: 1,max: 7});
        let nights_of_minimumstay_for_date_range = JSON.stringify(specialStayRangeArray()).replace(/"/g, '""');
        let days_from_last_update = faker.random.number({min: 1,max: 100});
        data = `"${host_name}","${host_picture_url}","${property_type}","${title}","${score}","${location}","${num_guests}","${num_rooms}","${num_beds}","${num_baths}","${num_views}","${highlights}","${studio}","${descriptionSummary}","${descriptions}","${amenities}","${smoking}","${pet_suitable}","${parties_or_events}","${no_safe_for_children_under}","${check_in_start_time}","${checkout_time}","${selfcheck_in_with_lockbox}","${rules_to_acknowledge}","${cancellation_type}","${cancellation_summary}","${nights_of_stay_vary}","${nights_of_minimum_stay}","${nights_of_minimumstay_for_date_range}","${days_from_last_update}"`;
        let index = 20 - i;
        ok = writer.write(`"${index}",${data}\n`, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
};
let host_name = faker.name.findName();
let host_picture_url = faker.image.avatar();
let property_type = faker.lorem.word();
let title = faker.lorem.word();
let score = faker.random.number({min: 1,max: 25});
let location = faker.lorem.word();
let num_guests = faker.random.number({min: 1,max: 5});
let num_rooms = faker.random.number({min: 1,max: 5});
let num_beds = faker.random.number({min: 1,max: 5});
let num_baths = faker.random.number({min: 1,max: 5});
let num_views = faker.random.number({min: 1,max: 50});
let highlights = JSON.stringify(makeArray());
let studio = faker.random.boolean();
let descriptionSummary = faker.lorem.sentence();
let descriptions = JSON.stringify(makeArray());
let amenities = JSON.stringify(makeAmenities());
let smoking = faker.random.boolean();
let pet_suitable = faker.random.boolean();
let parties_or_events = faker.random.boolean();
let no_safe_for_children_under = faker.random.number({min: 1,max: 10});
let check_in_start_time = faker.random.number({min: 8,max: 12});
let checkout_time = faker.random.number({min: 8,max: 12});
let selfcheck_in_with_lockbox = faker.random.boolean();
let rules_to_acknowledge = faker.lorem.sentence();
let cancellation_type = faker.lorem.word();
let cancellation_summary = faker.lorem.sentence();
let nights_of_stay_vary = faker.random.boolean();
let nights_of_minimum_stay = faker.random.number({min: 1,max: 7});
let nights_of_minimumstay_for_date_range = JSON.stringify(specialStayRangeArray());
let days_from_last_update = faker.random.number({min: 1,max: 100});
const mydata = `"${host_name}","${host_picture_url}","${property_type}","${title}","${score}","${location}","${num_guests}","${num_rooms}","${num_beds}","${num_baths}","${num_views}",${highlights},"${studio}","${descriptionSummary}",${descriptions},${amenities},"${smoking}","${pet_suitable}","${parties_or_events}","${no_safe_for_children_under}","${check_in_start_time}","${checkout_time}","${selfcheck_in_with_lockbox}","${rules_to_acknowledge}","${cancellation_type}","${cancellation_summary}","${nights_of_stay_vary}","${nights_of_minimum_stay}",${nights_of_minimumstay_for_date_range},"${days_from_last_update}"`;
writeNTimes(writeStream, `${mydata}`);

