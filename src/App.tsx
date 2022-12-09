import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ReactSelect from "react-select/creatable";
import { useForm, Controller } from "react-hook-form";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "red", label: "red" },
  { value: "blue", label: "blue" },
  { value: "dark", label: "dark" },
];

function App() {
  const { register, handleSubmit, control, setValue } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const setVal = () => {
    setValue("select", options);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
        <div style={{ maxWidth: 300 }}>
          <Controller
            control={control}
            render={({ field, fieldState, formState }) => (
              <ReactSelect
                isMulti
                value={field.value}
                onChange={field.onChange}
                options={options}
              />
            )}
            name="select"
          />
        </div>
        <button>SUBMIT</button>
      </form>
      <button onClick={setVal}>SETVAL</button>
    </div>
  );
}

export default App;
