import { useState, useEffect } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => total + gasto.cantidad, 0) 
        const totalDisponible = presupuesto - totalGastado
        //calcular porcentaje gastado
        const nuevoPorcentaje = (( (presupuesto - totalDisponible) / presupuesto ) * 100).toFixed(1 )

        setDisponible(totalDisponible)
        setGastado(totalGastado) 
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }
        , 1500)
    }, [gastos])

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency', 
        currency: 'USD'
        })
    }
  
    return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? '#ff0000' : '#00bfa5',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                        textColor : '#00bfa5'
                    })}
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
        <div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>
                <p className={ `${disponible < 0 ? 'negativo' : ''}`  }>
                    <span>Disponible: </span>{formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    </div>
  )
}
export default ControlPresupuesto
