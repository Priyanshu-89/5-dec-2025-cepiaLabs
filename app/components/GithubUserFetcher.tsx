"use client";

import React, { useState } from "react";

interface GithubUser {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  location: string;
}

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    if (!username) return;

    setLoading(true);
    setError("");
     setUsername("");
    setUserData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) {
        setError("User not found");
        setLoading(false);
        return;
      }

      const data = await res.json();
      setUserData(data);
    } catch (error) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Search by Username Here...</h1>


      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 border rounded-lg w-72"
        />
        <button
          onClick={fetchUser}
          className="px-6 py-1 bg-slate-600 text-white rounded-lg hover:bg-slate-700"
        >
          Search
        </button>
      </div>


      {loading && <p className="text-slate-600 text-lg">Loading...</p>}


      {error && <p className="text-red-600 text-lg">{error}</p>}


      {userData && (
        <div className="bg-white p-6 mt-4 rounded-xl shadow-lg max-w-md text-center">
          <img
            src={userData.avatar_url}
            alt="avatar"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">
            {userData.name || userData.login}
          </h2>
          <p className="text-gray-600 mb-3">{userData.bio || "No bio available"}</p>

          <div className="flex justify-between flex-col items-center text-left mt-4">
            <p className="font-semibold">Followers: <span className="font-normal text-slate-600">{userData.followers}</span></p>
            <p className="font-semibold">Public Repos: <span className="font-normal text-slate-600">{userData.public_repos}</span></p>
          </div>

          {userData.location && (
            <p className="mt-3 font-semibold">Location:<span className="font-normal text-slate-600">{userData.location}</span></p>
          )}
        </div>
      )}
    </div>
  );
}
