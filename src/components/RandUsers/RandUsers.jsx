import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "../Login/Login";
import UseToken from "../UseToken";
import "./RandUsers.css";

const RandUsers = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadData = async () => {
    setLoading(true);
    const response = await axios.get("https://randomuser.me/api/");
    setData(response.data);
    setLoading(false);
  };
  useEffect(() => {
    loadData();
  }, []);

  const handleClick = () => {
    loadData();
  };

  const { token, setToken } = UseToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-[#ffffff] rounded-[10px] shadow-lg content-center px-5 h-[320px] w-[350px] ">
      {loading ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="loading"
          />
        </div>
      ) : (
        data.results?.map((random, index) => {
          return (
            <div key={index}>
              <h2 className="flex justify-center p-1 font-bold my-3">
                {random.name.first} {random.name.last}
              </h2>
              <div className="flex justify-center my-3">
                <img
                  className="rounded-[10px]"
                  src={random.picture.large}
                  alt="pic"
                />
              </div>
              <p className="p-1 flex justify-center font-bold my-3">
                {random.email}
              </p>
              <div className="flex justify-center m-1">
                <button className=" btn" onClick={handleClick}>
                  Generate Data
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RandUsers;
