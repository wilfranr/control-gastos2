import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setIsValidPresupuesto
}) => {
    const [ mensaje, setMensaje ] = useState(null)
    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!isNaN(e.target[0].value) && e.target[0].value > 0){
            setPresupuesto(parseInt(e.target[0].value))
            setMensaje(null)
            setIsValidPresupuesto(true)
        }else{
            setMensaje('El presupuesto debe ser un número mayor a 0')
        }
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input
                className='nuevo-presupuesto'
                type="number"
                placeholder='Añade tu presupuesto' 
                value={presupuesto}
                onChange={e => setPresupuesto((e.target.value))}
                 />
            </div>
            <input type="submit" value="Agregar" />   
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
        </form>
    </div>  
    )
}

export default NuevoPresupuesto