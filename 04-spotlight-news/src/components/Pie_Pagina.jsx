import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'


const Pie_Pagina = () => {
  return (
    <div className='contenidoPie'>
      
      <div className='pie menupie'>

        <h2>MÁS INFORMACIÓN</h2>

        <ul>
            <li>
                <a href="#encabezado">INICIO</a>
            </li>
            <li>
                <a href="#">BLOG</a>
            </li>
            <li>
                <a href="#">TRABAJA CON NOSOTROS</a>
            </li>
            <li>
                <a href="#">CONTACTANOS</a>
            </li>
        </ul>
      </div>

      <div className='pie direccion'>
        <h2>¿DONDE ESTAMOS?</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7954.15699350793!2d-74.23827965958232!3d4.579925426194573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f75c9fb667bcf%3A0x25d9406f972231f2!2sConjunto%20Residencial%20El%20Futuro!5e0!3m2!1ses!2sco!4v1733865789568!5m2!1ses!2sco" 
          width="600" 
          height="450" 
          style={{border : "0"}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

      <div className='pie desarrollo'>
        <h2>DESARROLLADO CON</h2>
        <div className='icon'>
          <FontAwesomeIcon icon={faHtml5} className='icon h'/> 
          <FontAwesomeIcon icon={faCss3} className='icon c'/>
          <FontAwesomeIcon icon={faJsSquare} className='icon j'/>
          <FontAwesomeIcon icon={faReact} className='icon r'/>  
        </div>
        
        <h2>OPTIMIZADO PARA</h2>
        <div className='img'>
          <img src="chrome.png" alt="Navegador Chrome" />
          <img src="firefox-icon.png" alt="Navegador FireFox" />
          <img src="Opera_256x256.png" alt="Navegador Opera" />
          <img src="safari.png" alt="Navegador Safari" />
        </div>

        <h2>AUTOR</h2>
        <p>&copy; Farid Camilo Ávila Suarez</p>
      </div>
    </div>
  )
}

export default Pie_Pagina
