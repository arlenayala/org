import { useState } from "react"
import "./formulario.css"
import Campo from "../campo"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"


const Formulario = (props) => {
    const [nombre , actualizarNombre]= useState("")
    const [cargo , actualizarCargo]= useState("")
    const [foto , actualizarFoto]= useState("")
    const [equipo , actualizarEquipo]= useState("")

    const [titulo,actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador,crearEquipo}=props
    
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log ("manejar el envio")
        let datosAEnviar= {
            nombre,
            cargo,
            foto,
            equipo
        }
       registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
       
        crearEquipo({titulo,colorPrimario:color})

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2 >Rellena el formulario para crear el colaborador</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar nombre"
            required= {true} 
            valor={nombre}
            actualizarValor={actualizarNombre} 
             />
            <Campo 
            titulo="Cargo" 
            placeholder="Ingresar cargo" 
            required
            valor={cargo}
            actualizarValor={actualizarCargo}
            />
            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            actualizarValor= {actualizarFoto}
            />
            <ListaOpciones 
            valor= {equipo}
            actualizarEquipo = {actualizarEquipo}
            equipos={props.equipos}
            />
            <Boton texto="Crear" />
            
           
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2 >Rellena el formulario para crear el Equipo</h2>
            <Campo 
            titulo="titulo" 
            placeholder="Ingresar titulo"
            required= {true} 
            valor={titulo}
            actualizarValor={actualizarTitulo} 
             />
            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en Hex." 
            required
            valor={color}
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton texto="Registrar equipo" />
        </form>

    </section>
}

export default Formulario