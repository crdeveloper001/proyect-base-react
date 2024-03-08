import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ReduxCounter } from "./components/08-ReduxCounter/ReduxCounter";

function App() {
  return (
    <div>
      {/* <Navigation/> */}
      {/* <h1 style={{textAlign:"center"}}>REACT JS APP</h1> */}
      {/* <Parent/> */}
      {/* <ContactForm/> */}
      {/* <ContactFormEvent/> */}
      {/* <CounterComponents/> */}
      {/* <FieldsAxios/> */}
      <h1 style={{"textAlign":"center"}}>HOLA MUNDO DESDE REACT JS</h1>
      <hr />
      <ReduxCounter/>
    </div>
  );
}

export default App;
