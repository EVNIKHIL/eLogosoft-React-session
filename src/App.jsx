import "./App.css";
import FormikComponent from "./Formik";
// import FormikHook from "./FormikHook";

function App() {
  const onValidationChange = (isValid) => {
    console.log("parent", isValid);
  };
  return (
    <>
      <h1>Hello react</h1>
      <FormikComponent onValidationChange={onValidationChange} />
      {/* <FormikHook onValidationChange={onValidationChange} /> */}
    </>
  );
}

export default App;
