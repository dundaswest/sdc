const express = require('express');
const bodyParser = require('body-parser');
const roomsRoutes = require('./Rooms');
const path = require('path');
const nr = require('newrelic');

const app = express();
const router = express.Router();
const pg = require('pg');
const db = require('./queries.js');

const pool = new pg.Pool({
  user: 'jo-eunbyeol',
  host: 'localhost',
  database: 'jamie',
  port: '5432',
});
/*
pool.connect((err,db,done) => {
  if(err) {
    return console.log(err);
  } else {
    db.query('SELECT * FROM house where id = 1',(err,table)=> {
      done();
      if(err) {
        return console.log(err);
      } else {
        console.log(table.rows)
      }
    })
  }
})
*/
app.use(bodyParser.json());

app.use('/:id', express.static(path.join(__dirname, '../public')));

app.use('/rooms', roomsRoutes);

app.get('/favicon.ico', (req, res) => res.status(204));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Mehods',
      'GET, POST, PUT, PATCH, DELETE',
    );
    return res.status(200).json({});
  }
  next();
});
/*
app.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id)
  const { rows } = db.query('SELECT * FROM house WHERE id = $1', [id]);
  console.log(rows[0]);
  res.send(rows[0]);
});
*/
app.get('/api/house/:houseId', (req,res) => {
  const id = req.params.houseId;
  console.log(req.params.houseId);
  pool.connect((err,db,done) => {
    if(err) {
      return console.log(err);
    } else {
      db.query(`SELECT * FROM house where id = ${id}`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
         console.log('row',table.rows);
          console.log(typeof rows);
          db.end();
          res.status(200).send(table.rows);
        }
      })
    }
  })
});

app.get('/api/house/:houseId/host', (req,res) => {
  const id = req.params.houseId;
  console.log(req.params.houseId);
  pool.connect((err,db,done) => {
    if(err) {
      return console.log(err);
    } else {
      db.query(`SELECT * FROM host where id = 1`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
          db.end();
          res.status(200).send(table.rows);
        }
      })
    }
  })
});

app.get('/api/house/:houseId/highlights', (req,res) => {
  const id = req.params.houseId;
  pool.connect((err,db,done) => {
    if(err) {
      return console.log(err);
    } else {
      db.query(`SELECT highlights.title, highlights.comment
      FROM highlights
      INNER JOIN house_highlight ON highlights.id = house_highlight.highlight_id
      WHERE house_highlight.house_id = ${id}`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
          db.end();
          console.log(table.rows)
          res.status(200).send(table.rows);
        }
      })
    }
  })
});

app.get('/api/house/:houseId/amenities', (req,res) => {
  const id = req.params.houseId;
  pool.connect((err,db,done) => {
    if(err) {
      return console.log(err);
    } else {
      db.query(`SELECT amenities.name, amenities.description
      FROM amenities
      INNER JOIN house_amenities ON amenities.id = house_amenities.amenity_id
      WHERE house_amenities.house_id = ${id}`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
          db.end();
          console.log(table.rows)
          res.status(200).send(table.rows);
        }
      })
    }
  })
});

app.get('/api/house/:houseId/description', (req,res) => {
  const id = req.params.houseId;
  pool.connect((err,db,done) => {
    if(err) {
      return console.log(err);
    } else {
      db.query(`SELECT * FROM descriptions where id <= 3`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
          db.end();
          console.log(table.rows)
          res.status(200).send(table.rows);
        }
      })
    }
  })
});
app.get('/api/house/:houseId/amenities', (req,res) => {
  const id = req.params.houseId;
  pool.connect((err,db,done) => {
    if(err) {
      return console.log(err);
    } else {
      db.query(`SELECT * FROM amenities where id <= 3`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
          db.end();
          console.log(table.rows)
          res.status(200).send(table.rows);
        }
      })
    }
  })
});

app.get('/api/house/:houseId/cancellation', (req,res) => {
  const id = req.params.houseId;
  pool.connect((err,db,done) => {
    if(err) {
      return console.log(err);
    } else {
      db.query(`select * from cancellation where id = 2`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
          db.end();
          console.log(table.rows)
          res.status(200).send(table.rows);
        }
      })
    }
  })
});

app.put('/api/house/:houseId', (req,res) => {
  const id = req.params.houseId;
  pool.connect((err,db,done) => {
    if(err) {
      return console.log(err);
    } else {
      db.query(`UPDATE house SET num_views = num_views+1 where house.id = ${id}`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
         console.log('row',table.rows);
          console.log(typeof rows);
          db.end();
          res.status(200).send(table.rows)
        }
      })
    }
  })
});

app.post('/api/house/:houseId', (req,res) => {
  const id = req.body.id;
  const property_type = req.body.property_type;
  const title = req.body.title;
  const location = req.body.location;
  const num_guests = req.body.num_guests;
  const num_beds = req.body.num_beds;
  const num_views =req.body.num_views;
  const num_baths = req.body.num_baths;
  const num_rooms = req.body.num_rooms;
  const studio = req.body.studio;
  const score= req.body.score;
  const description_title = req.body.description_title;
  const days_from_last_update = req.body.days_from_last_update;
  const minimumstay = req.body.minimumstay;
  const checkin_start_time = req.body.checkin_start_time;
  const checkout_time = req.body.checkout_time;
  const description_comment = req.body.description_comment;
  const host_id = req.body.host_id;
  const highlights_id= req.body.highlights_id;
  const cancellation_id = req.body.cancellation_id;
  const house_rules_id = req.body.house_rules_id;
  const amenities_id = req.body.amenities_id;
  pool.connect((err,db,done) => {
    const id = req.params.houseId;
    if(err) {
      return console.log(err);
    } else {
      db.query(`insert into house values(${id+1},${property_type},${title},${location},${num_guests},${num_beds},${num_views},${num_baths},${num_rooms},${studio},${score},${description_title},${days_from_last_update},${minimumstay},${checkin_start_time},${checkout_time},${description_comment},${host_id},${highlights_id},${cancellation_id},${house_rules_id},${amenities_id}`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
         console.log('row',table.rows);
          console.log(typeof rows);
          db.end();
          res.status(200).send(table.rows)
        }
      })
    }
  })
});

app.delete('/api/house/:houseId', (req,res) => {
  const id = req.params.houseId;
  pool.connect((err,db,done) => {
    if(err) {
      return console.log(err);
    } else {
      db.query(`DELETE * FROM house where id = ${id}`,(err,table)=> {
        done();
        if(err) {
          return console.log(err);
        } else {
         console.log('row',table.rows);
          console.log(typeof rows);
          db.end();
          res.status(200).send(table.rows)
        }
      })
    }
  })
});


const port = 8081;
app.listen(port, () => console.log(`listening on port ${port}`));
