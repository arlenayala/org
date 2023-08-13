import "./colaborador.css"
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from "react-icons/ai"

const Colaborador = (props) => {
    
    const {nombre,cargo,foto,equipo,id,fav}=props.datos
    const {colorPrimario,eliminarColaborador,like}=props

    //operador ternario
    //consdicion ? verdadero:false


    return <div className="colaborador">
        <AiFillCloseCircle  className="eliminar"onClick={()=>eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre} />

        </div >
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{cargo}</h5>
           {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}

        </div>
    </div>
}

export default Colaborador