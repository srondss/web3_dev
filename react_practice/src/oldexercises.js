// import "./App.css";
// import { useEffect, useState } from "react";
// import { Task } from "./Task";
// import React from "react";
// import Axios from "axios";

// function App() {
//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [catFact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   };

//   useEffect(() => {
//     fetchCatFact();
//   }, []);

//   const handleChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const addTask = () => {
//     let task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//       completed: false,
//     };
//     setTodoList([...todoList, task]);
//   };

//   const deleteTask = (id) => {
//     setTodoList(
//       todoList.filter((element) => {
//         return element.id === id ? false : true;
//       })
//     );
//   };

//   const completeTask = (id) => {
//     setTodoList(
//       todoList.map((element) => {
//         if (element.id === id) {
//           return { ...element, completed: true };
//         } else {
//           return element;
//         }
//       })
//     );
//   };

//   const [excuse, setExcuse] = useState("");

//   const fetchExcuse = (typeExcuse) => {
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${typeExcuse}`).then(
//       (res) => {
//         setExcuse(res.data[0].excuse);
//       }
//     );
//   };

//   const [userName, setUserName] = useState("");
//   const [predictedAge, setPredictedAge] = useState(0);
//   const fetchData = () => {
//     Axios.get(`https://api.agify.io/?name=${userName}`).then((res) => {
//       setPredictedAge(res.data);
//     });
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <h1>Add Your Task</h1>
//         <input onChange={handleChange} />
//         <button onClick={addTask}>Add Task</button>
//       </div>
//       <div className="list">
//         {todoList.map((task, key) => {
//           return (
//             <Task
//               key={key}
//               taskName={task.taskName}
//               id={task.id}
//               completed={task.completed}
//               deleteTask={deleteTask}
//               completeTask={completeTask}
//             />
//           );
//         })}
//       </div>
//       <button onClick={fetchCatFact}>Get Cat Fact</button>
//       <br></br>
//       <div>{catFact}</div>
//       <br></br>

//       <input
//         placeholder="Ex. Youssef..."
//         onChange={(event) => {
//           setUserName(event.target.value);
//         }}
//       />
//       <button onClick={fetchData}>Predict Age</button>
//       <h1>Predicted Age: {predictedAge.age}</h1>
//       <h1>Generate An Excuse</h1>
//       <button onClick={() => fetchExcuse("party")}>Party</button>
//       <button onClick={() => fetchExcuse("family")}>Family</button>
//       <button onClick={() => fetchExcuse("office")}>Office</button>
//       <p>{excuse}</p>
//     </div>
//   );
// }

// export default App;
