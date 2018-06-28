const Router = require('express-promise-router')

const db = require('../../database/index2.js');

// create a new express-promise-router
// this has the same API as the normal express router except
// it allows you to use async functions as route handlers
const router = new Router();

// export our router to be mounted by the parent application
module.exports = router

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  console.log(rows[0])
  res.send(rows[0])
})

/*
EXPLAIN ANALYZE SELECT * FROM house LEFT JOIN host ON host_id = host.id;
id,property_type,title,location,num_guests,num_beds,num_views,num_baths,num_rooms,studio,score,description_title,days_from_last_update,minimumstay,checkin_start_time,checkout_time,description_comment,host_id,highlights_id,cancellation_id,house_rules_id,amenities_id

-------------------------+---------+---------------+-----------------+----------------+--------------
 10000001,'voluptatems','dolor','nulla',2,4,18,2,4,'fzxcv',15,'enim',29,4,12,11,'Ea at nisi rerum rerum non sequi.',29022,47560,3788,2077,7

 UPDATE films SET kind = 'Dramatic' WHERE kind = 'Drama';
 */
