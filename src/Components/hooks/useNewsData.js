import { useState, useEffect } from "react";

const useNewsData = (category, searchTerm) => {

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);

        // const apiKey = process.env.REACT_APP_LINESNEWS_API_KEY;
        var apiUrl = 'https://linesnews.onrender.com/api/news-datas'
        
        apiUrl = searchTerm ? category=searchTerm : "";
        apiUrl = category
        ? `https://linesnews.onrender.com/api/news-datas?category=${category}`
        : 'https://linesnews.onrender.com/api/news-datas';
        const url = apiUrl;
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data.data);
        

        // data.forEach((element) => {
        //   console.log(element.attributes.headline);
        // });
        setNewsData(data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [category, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsData;