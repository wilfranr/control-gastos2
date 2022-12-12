import { useState, useEffect} from 'react'

const Filtros = ( {filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className="campo">
                <label htmlFor="">Filtrar Gastos</label>
                <select 
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
                >
                <option value="">-- Todos --</option>
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
        </form>
    </div>
  )
}

export default Filtros