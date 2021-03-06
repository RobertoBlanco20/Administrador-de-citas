import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

    // Crear State de citas
    const [cita, agregarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false)

    // Funcion que se ejecuta cada vez que un usuario escribe en un input
    const actualizarState = (e) => {
        agregarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores para resetear el formulario 
    const {mascota, propietario, fecha, hora, sintomas} = cita;

    // Cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault();

        // Validar formulario
        if( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''  ){
            actualizarError(true);
            return
        }

        // Quitar mensaje de error 
        actualizarError(false);

        // Agregar ID
        cita.id = uuidv4();

        // Crear la cita
        crearCita(cita);

        // Reiniciar el form
        agregarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            { error ?  <p className="alerta-error">Todos los campos son obligatorios </p>   
            :   null }

            <form 
                onSubmit={submitCita}>
                <label htmlFor="mascota">Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota"
                    className='u-full-width' 
                    id="nombreMascota" 
                    placeholder='Nombre Mascota' 
                    onChange={actualizarState}
                    value={mascota}
                />
                
                <label htmlFor='nombreDuenio'>Nombre Due??o</label>
                <input 
                    type="text" 
                    name='propietario' 
                    className='u-full-width' 
                    id="nombreDuenio" 
                    placeholder='Nombre due??o de la mascota' 
                    onChange={actualizarState} 
                    value={propietario}
                />
                
                <label htmlFor='fecha'>Fecha</label>
                <input 
                    type='date' 
                    name='fecha' 
                    className='u-full-width' 
                    id='fecha' 
                    onChange={actualizarState}
                    value={fecha}
                />

                <label htmlFor='hora'>Hora</label>
                <input 
                    type='time' 
                    name='hora' 
                    className='u-full-width' 
                    id='hora'  
                    onChange={actualizarState}
                    value={hora}
                    />

                <label htmlFor='sintomas'>Sintomas</label>
                <textarea 
                    name='sintomas' 
                    id='sintomas' 
                    className='u-full-width' 
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <br/>
                <button 
                    type="submit"
                    className='u-full-width button-primary'  
                    id='boton'
                    >Agendar Cita
                </button>
            </form>

        </Fragment>
     );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;