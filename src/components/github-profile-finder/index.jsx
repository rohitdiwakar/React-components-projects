import React, { useEffect, useState } from "react";
import User from './user'
import './github.css'
const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("rohitdiwakar");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleSubmit() {
  fetchGithubUserData()

  }
  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);
  // console.log(userName);
  if (loading) {
    return <h1>Loading Data ! please wait</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="seacr github username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
