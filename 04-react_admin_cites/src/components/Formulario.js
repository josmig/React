import React, { Fragment } from 'react';


const Formulario = () =>{

    return(
        <Fragment>
            {/* <h1>Formulario de Registro</h1> */}
            <h2>Crear cita</h2>
            <form>
                <label>Nombre Mascota</label>    
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                />
                <label>Nombre dueño</label>    
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                />

                <label>Sintomas | Problemas</label>    
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Sintomas de la mascota">
                </textarea>

                <label>Fecha de Alta</label>    
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"                    
                />
                <label>Hora</label>    
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"                    
                />

                <button
                    type="submit"
                    className="u-full-width button-primary">
                Agregar cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;