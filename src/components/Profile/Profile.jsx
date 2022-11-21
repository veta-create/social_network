import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import panorama from "../../assets/images/panorama.jpg";

const Profile = (props) => {
  return (
    <div>
      <div>
        <img alt="#" src={panorama} />
      </div>

      <div className={s.profileContainer}>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
