import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
    </div>
  );
}

export default App;
