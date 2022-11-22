import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/useHttp";

function App() {
  const [tasks, setTasks] = useState([]);

  // Transforming Data as required
  const transformTasks = useCallback((taskObj) => {
    const loadedTasks = [];
    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }
    setTasks(loadedTasks);
  });

  // Calling custom hook here
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  // Rendering component after fetching data
  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-http-6b7a6-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
      },
      transformTasks
    );
  }, []);

  // Adding tasks to array
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);

// const fetchTasks = async () => {
//   setIsLoading(true);
//   setError(null);
//   try {
//     const response = await fetch(
//       "https://react-http-6b7a6-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json"
//     );

//     if (!response.ok) {
//       throw new Error("Request failed!");
//     }
//     const data = await response.json();
//   } catch (err) {
//     setError(err.message || "Something went wrong!");
//   }

//   setIsLoading(false);
// };
