import React from 'react'
import {
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
    LeadingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatearFecha } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    salud: IconoSalud,
    ocio: IconoOcio,
    suscripciones: IconoSuscripciones
}

const Gasto = ({ gasto, setGastoEditar }) => {
    const { nombre, cantidad, categoria, fecha, id } = gasto
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction
                onClick={() => setGastoEditar(gasto)}
                >
                <div className='swipe-action'>
                    <i className='fas fa-edit-alt'>Editar</i>
                
                </div>
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => console.log('delete')}
            >
                <div className='swipe-action'>
                    <i className='fas fa-trash-alt'>Eliminar</i>
                </div>
            </SwipeAction>
        </TrailingActions>
    )


    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={diccionarioIconos[categoria]} alt="categoria" />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>
                                {categoria}
                            </p>
                            <p className='nombre-gasto'>{nombre}</p>
                            <p className='fecha-gasto'>
                                Agregado el: {' '}
                                <span>{formatearFecha(fecha)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>${cantidad}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto