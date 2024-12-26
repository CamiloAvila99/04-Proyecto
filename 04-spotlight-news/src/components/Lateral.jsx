import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Lateral = () => {

    const noRecargar = e =>{
        e.preventDefault()
    }

  return (
    <div className='contenido-lateral'>
        <div className='cuadros-laterales sesion'>
            <h2>Inicia Sesion</h2>
            <form onSubmit={noRecargar}>
                <input type="text" placeholder='Usuario'/>
                <input type="password" placeholder='Contraseña'/>

                <div className='botones'>
                    <button>Entrar</button>
                    <button>Limpiar</button>
                </div>

                <a href="#">¿Has olvidado tu contraseña?</a>
            </form>
        </div>

        <div className='cuadros-laterales registrate'>
            <h2>Registrate</h2>

            <p>
                Registrate en Spotlight News para recibir la actualidad del mundo
            </p>

            <button>Registrate</button>
        </div>

        <div className='cuadros-laterales social'>
            <h2>Síguenos</h2>
            <div className='f'>
                <FontAwesomeIcon icon={faFacebook} size='2x'/>
                <a href="">Facebook</a>
            </div>
            <div className='t'>
                <FontAwesomeIcon icon={faTwitter} size='2x'/>
                <a href="">Twitter</a>
            </div>
            <div className='i'>
                <FontAwesomeIcon icon={faInstagram} size='2x'/>
                <a href="">Instagram</a>
            </div>
            <div className='y'>
                <FontAwesomeIcon icon={faYoutube} size='2x'/>
                <a href="">YouTube</a>
            </div>
        </div>

        <div className='cuadros-laterales publicidad'>
            <h2>Publicidad</h2>
        </div>
    </div>
  )
}

export default Lateral
