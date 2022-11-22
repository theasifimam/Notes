import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false); // For Loading time
  const [error, setError] = useState(null); // For showing error

  // For fetching data or pushing data to firebase
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    // For catching Error, Using try catch block
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      // Checking if response status is OK
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();

      // Transforming data through below function
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;

//   const loadedTasks = [];
//   for (const taskKey in data) {
//     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
//   }
//   setTasks(loadedTasks);
