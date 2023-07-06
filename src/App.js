import "./styles.css";

import {Alert1} from './Alert1';
import {Alert2} from './Alert2';
import ContactDetails from "./ContactDetals";

export default function App() {
  return (
    <div className="App">
       {/* <Alert1/>*/}
       <Alert2
           type="information"
               heading="Success"
               closable
               onClose={() => console.log("closed")}>
            Everything is really good!
        </Alert2>
    </div>
  );
}
