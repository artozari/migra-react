import { useEffect, Fragment, useState } from "react"

export function ClockFunction() {

  const [fecha, setfecha] = useState(new Date())
  const [edad, setEdad] = useState(0)
  const [nombre, setNombre] = useState("Angel")
  const [apellido, setApellido] = useState("Mamani Corbalan")

useEffect(() => {
  const timerID = setInterval(() => {
    setfecha(new Date())
    setEdad(edad + 1)
  }, 1000);
  
  // Función de limpieza para clearInterval en componentWillUnmount
  return () => {
      clearInterval(timerID);
    };
  }, [edad]);


  return(
    <Fragment>
      <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
      <h3>{`${nombre} ${apellido}`}</h3>
      <h1>Edad: {`${edad}`}</h1>
    </Fragment>
  )
}
