// npm create vite@latest
// install: npm i axios

// Thunder Client (like postman)
// https://localhost:8000
// req.body:
/* JSON/body
{
    user:"Shani"
}
*/
import { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");

/* fetch request:
const getHandler = () => { 
      // default of js
      fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => {
      setText(data.message);
      console.log(data.message);
  });
  const data = await axios.get("http://localhost:8000")
  setText(data.data.message);
};
*/

  const getHandler = async () => {
    const data = await axios.get("http://localhost:8000/");
    setText(data.data.message);
  };


  const postHandler = async () => {
    const data = await axios.post("http://localhost:8000/", {
      user: "Shani",
    });
    setText(data.data.message);
  };



  return (
    <>
      <p>{text}</p>
      <button onClick={getHandler}>get</button>
      <button onClick={postHandler}>post</button>
    </>
  );
}

export default App;
