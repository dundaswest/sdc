const faker = require('faker');

var f='./host.csv',
    fs=require('fs');

console.time();

fs.writeFile(f,'id,name,pictureurl\n',function(err){
  if(err)
    console.error(err);
  console.log('Written!');
});

for(let i = 1; i < 1000000; i ++) {
  const name = faker.name.findName();
  const pictureUrl = faker.image.avatar();
  fs.appendFileSync(f,`${i},${name},${pictureUrl}\n`,function(err){
  if(err)
    console.error(err);
  console.log('Appended!');
  });
}

console.timeEnd()

