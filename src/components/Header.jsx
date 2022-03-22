import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";


const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos, setGastos}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        
        {isValidPresupuesto ? (
          <ControlPresupuesto 
            setGastos={setGastos}
            gastos={gastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        ) : (
          <NuevoPresupuesto 
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
              />
        )}
    </header>
  )
}

export default Header