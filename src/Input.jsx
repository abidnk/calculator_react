import {useState} from "react"

export default function Input() {
  const [state, setState] = useState()
  const handleSubmit = (e) => {
    setState(e.target.value)
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input onChange={handleSubmit} ></input>
      <p>{state}</p>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
