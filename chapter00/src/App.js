import "./styles.css";

//import {Alert1} from './Alert1';
//import {Alert2} from './Alert2';
//import {Alert3} from './Alert3';
import {Alert4} from './Alert4';
//import ContactDetails from "./ContactDetals";

export default function App() {
    return (
        <div className="App">
            {/* <Alert1/>*/}
            {/*<Alert2/>*/}
            {/*<Alert3 type="information" heading="[Alert3] Success">
                Everything is really good!
            </Alert3>*/}
            <Alert4
                type="information"
                heading="Success"
                closable
                onClose={() => console.log("closed")}>
                [Alert4]Everything is really good!
            </Alert4>
        </div>
    );
}
