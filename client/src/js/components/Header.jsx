import React from 'react';

const Header = (props) => {
  return (
    <hgroup id="listingHeader">
      <div className="headerPropertyInfo">
        <div className="listingTitle">{props.data.title}</div>
        <div className="listingLocation" >{props.data.location}</div>
      </div>
      <div className="headerOwnerInfo">
        <img className="ownerImage" alt="home owner" src={props.host.pictureurl} />
        <div className="ownerName">{props.host.name}</div>
      </div>
    </hgroup>
  );
};

export default Header;
