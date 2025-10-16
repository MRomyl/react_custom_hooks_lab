import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  const keyName = "firstName";
  const keyService = "serviceNumber";
  
  //lookup the init values or get defaults
  const initName = useLocalStorage(keyName, "")
  const initServNumber = useLocalStorage(keyService, 0);

  //setup state
  const [name, setName] = useState(initName)
  const [serviceNumber, setServiceNumber] = useState(initServNumber)

  useEffect(() => {
    // console.log(name)
    // console.log(serviceNumber)
    localStorage.setItem(keyName, name)
    localStorage.setItem(keyService, serviceNumber)
  }, [name, serviceNumber]);

    return (
      <>
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" data-testid={"name"} value={name} onChange={e => setName(e.target.value)} />
            <label htmlFor="service">Service Number:</label>
            <input type="text" data-testid={"service"} value={serviceNumber} onChange={e => setServiceNumber(e.target.value)} />

        </form>
        <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
      </>
    );
}

export default Form