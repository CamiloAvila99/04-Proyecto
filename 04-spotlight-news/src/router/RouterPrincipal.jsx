import React, { useState } from 'react'
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import Inicio from '../components/Inicio'
import Tecnologia from '../components/Tecnologia'
import Economia from '../components/Economia'
import Deportes from '../components/Deportes'
import Mundo from '../components/Mundo'
import Ciencia from '../components/Ciencia'
import Salud from '../components/Salud'
import Lateral from '../components/Lateral'
import Pie_Pagina from '../components/Pie_Pagina'

const RouterPrincipal = () => {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentNews, setCurrentNews] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

  return (
    <BrowserRouter>
        <header id='encabezado' className='encabezado'>
            <h1>Spotlight News</h1>

            <ul className='menu'>
                <li>
                    <NavLink to='/inicio' className={({isActive}) => (isActive ? 'active' : '')}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/tecnologia' className={({isActive}) => (isActive ? 'active' : '')}>
                        Tecnologia
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/economia' className={({isActive}) => (isActive ? 'active' : '')}>
                         Economia
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/deportes' className={({isActive}) => (isActive ? 'active' : '')}>
                        Deportes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/mundo' className={({isActive}) => (isActive ? 'active' : '')}>
                        Mundo
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/ciencia' className={({isActive}) => (isActive ? 'active' : '')}>
                        Ciencia
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/salud' className={({isActive}) => (isActive ? 'active' : '')}>
                        Salud
                    </NavLink>
                </li>
            </ul>
        </header>

        <div className='contenedor'>
            <div className='contenido'>
                {/*CARGA DE COMPONENTES*/}
                <Routes>
                    <Route path='/' 
                        element={<Inicio 
                        loading={loading} setLoading={setLoading} 
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        currentNews={currentNews} setCurrentNews={setCurrentNews}
                        totalPages={totalPages} setTotalPages={setTotalPages}
                    />}/>
                    <Route path='/inicio' element={<Inicio 
                        loading={loading} setLoading={setLoading}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        currentNews={currentNews} setCurrentNews={setCurrentNews}
                        totalPages={totalPages} setTotalPages={setTotalPages}
                    />}/>
                    <Route path='/tecnologia' element={<Tecnologia 
                        loading={loading} setLoading={setLoading}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        currentNews={currentNews} setCurrentNews={setCurrentNews}
                        totalPages={totalPages} setTotalPages={setTotalPages}
                    />}/>
                    <Route path='/economia' element={<Economia 
                        loading={loading} setLoading={setLoading}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        currentNews={currentNews} setCurrentNews={setCurrentNews}
                        totalPages={totalPages} setTotalPages={setTotalPages}
                    />}/>
                    <Route path='/deportes' element={<Deportes 
                        loading={loading} setLoading={setLoading}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        currentNews={currentNews} setCurrentNews={setCurrentNews}
                        totalPages={totalPages} setTotalPages={setTotalPages}
                    />}/>
                    <Route path='/mundo' element={<Mundo 
                        loading={loading} setLoading={setLoading}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        currentNews={currentNews} setCurrentNews={setCurrentNews}
                        totalPages={totalPages} setTotalPages={setTotalPages}
                    />}/>
                    <Route path='/ciencia' element={<Ciencia 
                        loading={loading} setLoading={setLoading}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        currentNews={currentNews} setCurrentNews={setCurrentNews}
                        totalPages={totalPages} setTotalPages={setTotalPages}
                    />}/>
                    <Route path='/salud' element={<Salud 
                        loading={loading} setLoading={setLoading}
                        currentPage={currentPage} setCurrentPage={setCurrentPage}
                        currentNews={currentNews} setCurrentNews={setCurrentNews}
                        totalPages={totalPages} setTotalPages={setTotalPages}
                    />}/>
                </Routes>
            </div>

            {/*CONTENIDO LATERAL*/}
            <aside className='barra-lateral'>
                <Lateral/>
            </aside>
        </div>

        {/*CONTENIDO PIE DE PAGINA*/}
        <footer className='pie-pagina'>
             <Pie_Pagina/>  
        </footer>
    </BrowserRouter>
  )
}

export default RouterPrincipal
