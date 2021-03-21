import React, { useRef } from "react";
import axios from "axios";

const { useEffect, useState } = React;

const fetchRandomData = () => {
  return axios
    .get("https://randomuser.me/api")
    .then(function (response) {
      // handle success
      console.log(response, "res");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
const getdata = (page) => {
  return axios
    .get(`https://randomuser.me/api?page=${page}`)
    .then(({ data }) => {
      // handle success
      // console.log(data, "data");
      return data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
const getFullUsername = (uinfo) => {
  const {
    name: { first, last },
  } = uinfo;
  return `${first} ${last}`;
};

// interface UserName {
//   first: string;
//   last: string;
//   title: string;
// }
// interface UserInfo {
//   name: UserName;
//   picture: any;
// }

export default function App() {
  const [counter, setCounter] = useState(0);
  const [userInfo, setUserInfo] = useState([]);
  const [nextPageNumber, setNextPageNumber] = useState(1);
  const [randomUserDataJSON, setRandomUserDataJSON] = useState("");

  const fetchNextUser = useRef(() => {});

  fetchNextUser.current = () => {
    getdata(nextPageNumber).then((rdata) => {
      // setRandomUserDataJSON(JSON.stringify(rdata) || "No Data Found" + counter);

      const newUserInfos = [...userInfo, ...rdata.results];
      setUserInfo(newUserInfos);
      setNextPageNumber(rdata.info.page + 1);
    });
  };

  useEffect(() => {
    fetchNextUser.current();
  }, []);

  return (
    <div>
      <h1>Hello Prasen!</h1>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          fetchNextUser.current();
        }}
      >
        Laod Next User
      </button>

      {userInfo.map((uinfo) => (
        <div key={uinfo.md5}>
          <img src={uinfo.picture.medium} />
          <p>{getFullUsername(uinfo)}</p>
        </div>
      ))}

      {/* <pre>{randomUserDataJSON}</pre> */}
    </div>
  );
}
