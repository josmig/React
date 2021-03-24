import React, { Fragment, useState} from 'react';

const Formulario = () =>{

    //Creación de state para formulario (Citas)
    
    const [cita,actualizarCita] = useState({
        mascota: '',
        propietario:'',
        sintomas:'',
        fecha:'',
        hora:''        
    });

    //funcion que se ejecuta cada vez que el usuario escribe en un input
    const handleChange = e =>{
        /* console.log(e.target.name); */ //con esto mapeamos los campos con el state
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const {mascota,propietario,sintomas,fecha,hora} = cita;

    //Cuando el usuario presiona Agregar cita
    const SubmitCita = e => {
        console.log('Enviando...');
        e.preventDefault();
    }

    return(
        <Fragment>
            {/* <h1>Formulario de Registro</h1> */}ss
            <h2>Crear cita</h2>
            <form
                onSubmit={SubmitCita}
                >
                <label>Nombre Mascota</label>    
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"                    
                    placeholder="Nombre mascota"
                    onChange={handleChange}
                    /* Esto nos permitira mas adelante resetear el form */
                    value={mascota}
                />
                <label>Nombre dueño</label>    
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Sintomas | Problemas</label>    
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    placeholder="Sintomas de la mascota"
                    onChange={handleChange}
                    value={sintomas}>                        
                    
                </textarea>

                <label>Fecha de Alta</label>    
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>    
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
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