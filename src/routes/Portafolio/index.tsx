import { Card, Col, Image, Row } from 'antd'
import perfil from "../../assets/perfil.jpg"
import Slider from '../../components/slider'

function NuestroEquipos() {
  return (
    <>
      <Slider title="Nuestro Equipo" paralax="parallaxEquipo" />
      <h2 style={{ textAlign: 'center', padding: '5% 0 5%' }}>
        Socios Fundadores
      </h2>
      <Row>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Card style={{ margin: '5% 10% 5% 10%', WebkitBoxShadow:'10px 10px 5px 0px rgba(0, 0, 0, 0.36)' }}>
            <span>
              – Abogado por la Universidad Autonoma<br />
              <br />

              – Segunda Especialidad en Derecho Laboral y Gestión Legal en Recursos Humanos y Magister en curso en Derecho de la Empresa por la Universidad Católica de Santa María, Curso de Formación en Protección al Consumidor y Arbitraje de Consumo otorgado por el Indecopi, distintos Diplomados en Protección al Consumidor y Derecho de Marcas, Responsabilidad Social Empresarial, Derecho Minero y ambiental.
              <br />
              <br />
              – Miembro de la Comisión Académica y Consultiva de Derecho Comercial adscrito en derecho de la competencia del Ilustre Colegio de Abogados de Arequipa.
              <br />
              <br />
              – Experiencia laboral como Consultor en derecho de la Competencia (Protección al consumidor, Propiedad Intelectual, etc) así como en Procesos Contenciosos Administrativos Laborales y Asesor legal en temas laborales como abogado de relaciones laborales en el sector de la Gran Minería
            </span>
            <div style={{ textAlign: 'center', paddingTop: '50px' }}>
              <Image src={perfil} alt="abogado" style={{ borderRadius: '50%', width: "50%" }} />
            </div>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>

              <h2>ANGEL SAENZ HUALLPARUCA</h2>
              <h3>Socio Fundador</h3>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Card style={{ margin: '5% 10% 5% 10%' }}>
            <span>
              – Abogado por la Universidad Autonoma<br />
              <br />

              – Segunda Especialidad en Derecho Laboral y Gestión Legal en Recursos Humanos y Magister en curso en Derecho de la Empresa por la Universidad Católica de Santa María, Curso de Formación en Protección al Consumidor y Arbitraje de Consumo otorgado por el Indecopi, distintos Diplomados en Protección al Consumidor y Derecho de Marcas, Responsabilidad Social Empresarial, Derecho Minero y ambiental.
              <br />
              <br />
              – Miembro de la Comisión Académica y Consultiva de Derecho Comercial adscrito en derecho de la competencia del Ilustre Colegio de Abogados de Arequipa.
              <br />
              <br />
              – Experiencia laboral como Consultor en derecho de la Competencia (Protección al consumidor, Propiedad Intelectual, etc) así como en Procesos Contenciosos Administrativos Laborales y Asesor legal en temas laborales como abogado de relaciones laborales en el sector de la Gran Minería
            </span>
            <div style={{ textAlign: 'center', paddingTop: '50px' }}>
              <Image src={perfil} alt="abogado" style={{ borderRadius: '50%', width: "50%" }} />
            </div>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>

              <h2>ANGEL SAENZ HUALLPARUCA</h2>
              <h3>Socio Fundador</h3>
            </div>
          </Card>
        </Col>

      </Row>
      <h2 style={{ textAlign: 'center', padding: '5% 0 5%' }}>
        Asistentes Legales
      </h2>

      aqui van mas miembros xd
    </>
  )
}

export default NuestroEquipos