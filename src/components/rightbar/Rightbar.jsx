import React from 'react';
import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from '../online/Online';


export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className='birthdayText'>
            <b>Anika Mishra</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user = {u} />
          ))}  
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return ( 
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Gorakhpur</span>
          </div>
        
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">

          <div className="rightbarFollowing">
            <img 
              src="assets/person/2.jpg" 
              alt="" 
              className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Ahana Shrivastva</span>
          </div>

          <div className="rightbarFollowing">
            <img 
              src="assets/person/7.jpg" 
              alt="" 
              className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Vedant Kashyap</span>
          </div>
          
          <div className="rightbarFollowing">
            <img 
              src="assets/person/4.jpg" 
              alt="" 
              className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Paurvi Mishra</span>
          </div>
          
          <div className="rightbarFollowing">
            <img 
              src="assets/person/5.jpg" 
              alt="" 
              className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Darsh Agarwal</span>
          </div>
          
          <div className="rightbarFollowing">
            <img 
              src="assets/person/6.jpg" 
              alt="" 
              className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shirley Malhotra</span>
          </div>
          
          <div className="rightbarFollowing">
            <img 
              src="assets/person/10.jpg" 
              alt="" 
              className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Tanay Varma</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
