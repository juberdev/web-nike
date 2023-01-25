import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.scss'
function Footer() {
    return (
        <footer className="pie-pagina">
            <div className="grupo-1">
                <div className="box">
                    <figure>
                        <Link to="/">
                            <img src="https://cdn.pixabay.com/photo/2014/09/17/22/40/lawyer-450205_640.png" alt="Logo de SLee Dw" />
                        </Link>
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                </div>
                <div className="box">
                    <h2>SIGUENOS</h2>
                    <div className="red-social">
                    <InstagramOutlined  style={{color:'white', fontSize:"40px"}} />,
                    <TwitterOutlined  style={{color:'white', fontSize:"40px"}} />,
                    <YoutubeOutlined  style={{color:'white', fontSize:"40px"}} />,
                    <FacebookOutlined  style={{color:'white', fontSize:"40px"}} />,
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2022 <b>Lybo solutions</b> - Todos los Derechos Reservados.</small>
            </div>
        </footer>
    )
}

export default Footer