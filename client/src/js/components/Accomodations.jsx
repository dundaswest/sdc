import React from 'react';

const Accomodation = (props) => {
  return (
    <hgroup id="accomodations">
      <img className="accomodationIcon" id="userIcon" alt="" src="https://s3-us-west-1.amazonaws.com/napbnb/icon21.png" />
      <div id="" >{` ${props.data.num_guests} ${props.data.num_guests > 1 ? 'guests' : 'guest'} `}</div>
      <img className="accomodationIcon" id="roomIcon" alt="" src="https://s3-us-west-1.amazonaws.com/napbnb/icon19.png" />
      <div id="" >{` ${props.data.num_rooms}  ${props.data.num_rooms > 1 ? 'bedrooms' : 'bedroom'} `}</div>
      <img className="accomodationIcon" id="bedIcon" alt="" src="https://s3-us-west-1.amazonaws.com/napbnb/icon15.png" />
      <div id="" >{` ${props.data.num_beds} ${props.data.num_bed > 1 ? 'beds' : 'bed'} `}</div>
      <img className="accomodationIcon" id="bathIcon" alt="" src="https://s3-us-west-1.amazonaws.com/napbnb/icon13.png" />
      <div id="" >{` ${props.data.num_baths} ${props.data.num_baths > 1 ? 'bathrooms' : 'bathroom'}`}</div>
    </hgroup>
  );
};

export default Accomodation;
