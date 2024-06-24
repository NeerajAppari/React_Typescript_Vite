//import Message from "./Message";
//import Alert from "./components/Alert";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
//import ListGroup from "./components/ListGroup";

//function App(){
//return <div><Message></Message></div>
//}

// go to command pallete>format documment>prettier format(makes the typescript neat)

function App() {
  let items = ["NY", "SY", "kl"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVsisibility] = useState(false);
  return (
    /*} <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup>

      
  </div>*/
    /* <div>
      <Alert>
        Hello<span>World</span>
      </Alert>
    </div>*/

    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVsisibility(false)}>Button Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVsisibility(true)}>
        Button
      </Button>
    </div>
  );
}
export default App;
