import { useState, useEffect } from 'react'
import IconoCerrar from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({ 
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto,
    gastoEditar,
    setGastoEditar
}) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')


    useEffect(() => {
        if( Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        
        }
    }, [gastoEditar.id])


    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    {/*Validar si el gasto es correcto*/}
    const handleSubmit = (e) => {
        e.preventDefault()
        if(nombre === '' || cantidad === 0 || categoria === '') {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000) 
            return
        }
        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }

    return (
        <div className="modal">

            <div className="cerrar-modal">
                <img src={IconoCerrar} alt="Cerrar Modal" onClick={ocultarModal} />
            </div>
            <form 
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}
                onSubmit={handleSubmit}    
            >
                <legend>{ gastoEditar.nombre ? 'Editar gasto' : 'Nuevo gasto' }</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className="campo">
                    <label htmlFor='nombre'>Nombre Gasto</label>
                    <input
                        type="text"
                        id='nombre'
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        type="number"
                        id='cantidad'
                        placeholder='Añade la cantidad del gasto, Ej. 300'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor='categoria'>Categoría</label>
                    <select name="categoria" id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="alimentacion">Alimentación</option>
                        <option value="transporte">Transporte</option>
                        <option value="hogar">Hogar</option>
                        <option value="salud">Salud</option>
                        <option value="compras">Compras</option>
                        <option value="diversion">Diversión</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>
                <input type="submit" value={ gastoEditar.nombre ? 'Guardar cambios' : 'Añadir gasto' } />
            </form>
        </div>
    )
}

export default Modal