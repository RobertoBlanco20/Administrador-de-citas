import React, { Fragment } from 'react';

const Formulario = () => {
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form action="#" method="post">
                <label for="mascota">Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota"
                    className='u-full-width' 
                    id="nombreMascota" 
                    placeholder='Nombre Mascota' 
                    required 
                />
                
                <label for='nombreDuenio'>Nombre Dueño</label>
                <input 
                    type="text" 
                    name='propietario' 
                    className='u-full-width' 
                    id="nombreDuenio" 
                    placeholder='Nombre dueño de la mascota' 
                    required 
                />
                
                <label for='fecha'>Fecha</label>
                <input 
                    type='date' 
                    name='fecha' 
                    className='u-full-width' 
                    id='fecha' 
                    required 
                />

                <label for='hora'>Hora</label>
                <input 
                    type='time' 
                    name='hora' 
                    className='u-full-width' 
                    id='hora'  
                    required 
                    />

                <label for='sintomas'>Sintomas</label>
                <textarea 
                    name='sintomas' 
                    id='sintomas' 
                    className='u-full-width' 
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
 
export default Formulario;