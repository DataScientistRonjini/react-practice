import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

// function App() {
//   return (
//     <button type="button" className="btn btn-{buttons}">
//       <Button classType="btn btn-primary" buttonText="Primary" />
//     </button>
//   );
// }

// import Alert from "./components/Alert";

// function App() {
//   return (
//     <div className="alert alert-primary">
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

export default App;
// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
