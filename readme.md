# Full Stack App from Scratch with Vite and Express 🏆

Welcome to this basic Full Stack app tutorial! Creating a simple Full Stack application from scratch using Vite for the frontend and Express for the backend. I used Axios for HTTP requests and CORS for handling cross-origin resource sharing. 🚀


## Technologies Used
- **Backend**
  - [x] Node.js
  - [x] Express.js
  - [x] Axios
  - [x] CORS

- **Frontend**
  - [x] Vite
  - [x] Axios


## Backend Setup 🎯
### Step 1: Initialize Node.js Project

```bash
mkdir backend
cd backend
npm init -y
```

### Step 2: Install Dependencies
```bash
npm install axios cors express nodemon
```

### Step 3: Update package.json
Update the `package.json` file to add scripts for running the server with nodemon:

```json
"scripts": {
  "start": "nodemon server.js"
}
```

### Step 4: Create server.js

Create a `server.js` file and add the following code:

##### Backend (Express)
```javascript
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests
app.get("/", (req, res) => {
  // Sending a JSON response with a message
  res.status(200).send({ message: "get" });
});

// Route to handle POST requests
app.post("/", (req, res) => {
  // Extracting user data from the request body
  const user = req.body.user;
  
  // Sending a JSON response with a message including the user's name
  res.status(200).send({ message: "post " + user });
});

// Starting the server on port 8000
app.listen(8000, () => {
  // Logging a message to indicate that the server is running
  console.log("app is listening on port 8000");
});
```


### Step 5: Run Backend Server

```bash
npm start
```



---
<br>

## Frontend Setup with Vite 🎯
### Step 1: Initialize Vite Project

```bash
mkdir frontend
cd frontend
npm init @vitejs/app
```

### Step 2: Install Axios

```bash
npm install axios
```


### Step 3: Update App.jsx

##### Frontend (React with Vite)
```javascript
import { useState } from "react";
import axios from "axios";

function App() {
  // State variable to hold the text message
  const [text, setText] = useState("");

  // Function to handle GET requests
  const getHandler = async () => {
    try {
      // Making a GET request to the backend
      const data = await axios.get("http://localhost:8000/");
      
      // Updating the text state with the message from the backend
      setText(data.data.message);
    } catch (error) {
      // Logging any errors that occur during the request
      console.error("Error fetching data:", error);
    }
  };

  // Function to handle POST requests
  const postHandler = async () => {
    try {
      // Making a POST request to the backend with user data
      const data = await axios.post("http://localhost:8000/", {
        user: "Shani",
      });
      
      // Updating the text state with the message from the backend
      setText(data.data.message);
    } catch (error) {
      // Logging any errors that occur during the request
      console.error("Error posting data:", error);
    }
  };

  // Rendering JSX elements
  return (
    <>
      {/* Displaying the text message */}
      <p>{text}</p>

      {/* Button to trigger the GET request */}
      <button onClick={getHandler}>get</button>

      {/* Button to trigger the POST request */}
      <button onClick={postHandler}>post</button>
    </>
  );
}

export default App;
```



### Step 4: Run Frontend App

```bash
npm run dev
```

---

### Comments Explanation:

- **Express Backend**:
  - `app.use(cors());`: Enables CORS to allow cross-origin requests.
  - `app.use(express.json());`: Middleware to parse JSON requests.
  - `app.get("/", ...)`: Handles GET requests and sends a JSON response.
  - `app.post("/", ...)`: Handles POST requests, extracts user data, and sends a JSON response.
  - `app.listen(8000, ...)`: Starts the server on port 8000 and logs a message.

- **React Frontend**:
  - `const [text, setText] = useState("");`: Initializes state to hold the text message.
  - `getHandler`: Async function to handle GET requests using Axios.
  - `postHandler`: Async function to handle POST requests using Axios.
  - `setText(data.data.message);`: Updates the state with the message from the backend.
  - `catch (error)`: Catches and logs any errors that occur during the request.


Happy coding! 🚀👩‍💻👨‍💻
