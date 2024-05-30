import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("");
  const [newUser, setNewUser] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://randomuser.me/api/");
        const fetchData = await response.json();
        setData(fetchData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [newUser]);

  return (
    <>
      <div className="App">
        {isLoading ? (
          <p>Loading data...</p>
        ) : (
          <p>Hello, {data.results[0].name.first}</p>
        )}
      </div>
      <button onClick={() => setNewUser(!newUser)}>Random user!</button>
    </>
  );
}
