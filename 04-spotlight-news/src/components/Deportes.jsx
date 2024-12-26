import React, { useEffect, useState } from 'react'
import { APIRestConnection } from '../helper/APIRestConection';
import { paginacion } from '../helper/Paginacion';

const Deportes = ({ loading, setLoading,
                    currentPage, setCurrentPage, 
                    currentNews, setCurrentNews,
                    totalPages, setTotalPages
                  }) => {

  const [newsDep, setNewsDep] = useState([]);

  const getNewsDep = async()=>{
    const news = await APIRestConnection('es','sports',12,'Deportes','newsDep');
    setNewsDep(news);
    setLoading(false);

    const {currentNews , totalPages} = paginacion(4,currentPage, news);
    setCurrentNews(currentNews);
    setTotalPages(totalPages);
  }

  useEffect(()=>{
    getNewsDep();
  },[]);

  useEffect(()=>{
    const { currentNews } = paginacion(4,currentPage, newsDep);
    setCurrentNews(currentNews);
  },[currentPage,newsDep]);

  const manejoCambioPagina = (pageNumber) =>{
    setCurrentPage(pageNumber);
  };


  return (
    <div className='noticias'>
        <h1>Todo en Deportes</h1>
        <div className='contenedor-noticias'>
          {loading ? (<p>Cargando...</p>) :
            (currentNews.map((item, index)=>(
              <div key={index} className='tarjetas-noticias'>
                <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <img src={item.image} alt="Img News" title='Img News'/>
                  <div key={index} className='data'>
                    <span>Fecha: {item.published.substring(0,10)}</span>
                    <span>Autor: {item.author}</span>
                  </div>
                  <div className='enlace'>
                    <a href={item.url} target='_blank' rel='noopener noreferrer'>Click para más Información</a>
                  </div>
              </div>
                )
              )
            )
          }
        </div>

        {/*COMPONENTE DE PAGINACIÓN*/}
        <div className='paginacion'>
          {Array.from({length: totalPages}, (_,index) =>(
            <button 
              key={index}
              onClick={()=>manejoCambioPagina(index +1)}
              className={currentPage === index +1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
    </div>
  )
}

export default Deportes
