import { useState, useEffect } from "react";
// import axios from "axios";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          const result = response.data.data;
          setData(result);

          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, 500);
    // return () => {
    //   second;
    // };
  }, url);
  return { data, loading };
};

export default useFetch;
