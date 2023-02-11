import { useState, useEffect } from "react";
// import axios from "axios";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const result = response.data.data;
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
    // return () => {
    //   second;
    // };
  }, []);
  return { data };
};

export default useFetch;
