import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <h1>My Profile</h1>
      <Link href="/editprofile">Edit Profile</Link>
    </div>
  );
};

export default ProfilePage;
