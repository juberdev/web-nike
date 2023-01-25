import { BarsOutlined } from '@ant-design/icons'
// import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
export default function Header() {

    return (
        <div style={{position:'fixed', width:'100%', zIndex:'100'}}>
            {/* <Row>
                <Col xs={12} sm={4} md={6} lg={8} xl={10}>
                    Celular: 924796106
                </Col>
                <Col xs={12} sm={16} md={12} lg={8} xl={4}>
                    Email: prueba@gmail.com
                </Col>
            </Row> */}

            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <BarsOutlined />
                </label>
                <Link to="/" className="enlace">
                <img src="https://cdn.pixabay.com/photo/2014/09/17/22/40/lawyer-450205_640.png" alt="Logo de SLee Dw" />
                </Link>
                <ul>
                    <li><Link className="active" to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/nuestro-equipo">Nuestro Equipo</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>

    )
}
