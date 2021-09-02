// import { useState } from "react";
// import Modal from "./Modal";
// import Backdrop from "./Backdrop";

// function Todo(props) {
//   const [modelIsOpen, setModalIsOpen] = useState(false);
//   const buttonHandler = () => {
//     setModalIsOpen(true);
//   };
//   const setButtonHandler = () => {
//     setModalIsOpen(false);
//   };
//   return (
//     <div className="card">
//       <h2>{props.title}</h2>
//       <div className="actions">
//         <button className="btn" onClick={buttonHandler}>
//           Delete
//         </button>
//       </div>
//       {modelIsOpen ? (
//         <Modal onCancle={setButtonHandler} onConfirm={setButtonHandler} />
//       ) : null}
//       {modelIsOpen && <Backdrop onClick={setButtonHandler} />}
//     </div>
//   );
// }

// export default Todo;
