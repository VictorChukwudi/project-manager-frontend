import { useState, useEffect } from "react";
import fetch from "node-fetch";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const responseToJson = await response.json();
      setData(responseToJson);
      return { data };
    };
    fetchData();
    // return () => {
    //   second;
    // };
  }, [url]);
};

export default useFetch;
