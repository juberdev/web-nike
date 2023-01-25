// import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd';
import "../../styles/home.scss";
import consulta from '../../assets/CONSULTAS-VIRTUAL.jpg';
import susecion from '../../assets/suseciones.png';
import familiar from '../../assets/familiar.png';
import personas from '../../assets/personas.png';

// import Carrousel from '../../components/Carrousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseClock } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import "../../styles/contacto.scss";
import Carrousel from '../../components/Carrousel';
// import cont from '../../assets/bg-contactanos.jpg';

library.add(faBriefcaseClock)

export default function Home() {

  // const { Meta } = Card;

  // const a = (url?: string) => {
  //   window.open(url)
  // }


  return (
    <>
      <div>
      <Carrousel />
      </div>
      <div style={{ textAlign: 'center', width: '80%', margin: 'auto', padding: '5% 0 5% 0' }}>
        <h1>ABOGADOS DE FAMILIA</h1><br /><br />
        <span>Somos un estudio especializado en casos de derecho de Familia, Personas y Sucesiones. Ofrecemos a nuestros clientes, un servicio eficiente y eficaz, con un staff de abogados especializados, quienes desarrollarán la estrategia de defensa más conveniente a sus intereses. En Villena Abogados nuestro enfoque es simple, ayudar a nuestros clientes a solucionar sus problemas para que puedan continuar su vida y actividades con total tranquilidad.</span>
      </div>

      <div className='bodyHome'>
        <Row style={{ width: '70%', marginLeft: '15%' }}>
          <Col xs={24} sm={8} md={8} lg={8} xl={8} >
            <div className='content-op'>
              <div className='img-op'><img style={{ width: '50px' }} src={familiar} alt='' /><br /></div>
              <div className='span-op'>Derecho familar</div><br />
              <button className='button-op'>ver mas</button>
            </div>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8} >
            <div className='content-op'>
              <img className='img-op' style={{ width: '50px' }} src={susecion} alt='' /><br />
              <div className='span-op' style={{ textAlign: 'center' }}>Derecho de Suseciones</div><br />
              <button className='button-op'>ver mas</button>
            </div>
          </Col>
          <Col xs={24} sm={8} md={8} lg={8} xl={8} >
            <div className='content-op'>
              <img className='img-op' style={{ width: '50px' }} src={personas} alt='' /><br />
              <div className='span-op' style={{ textAlign: 'center' }}>Derecho de las Personas</div><br />
              <button className='button-op'>ver mas</button>

            </div>
          </Col>
        </Row>
      </div>


      {/* <div style={{ width: '90%', marginLeft: '5%' }}>

        <Row style={{ width: "100%" }}>
          <Col style={{ padding: "0 3% 0 3%" }} xs={24} sm={12} md={12} lg={6} xl={6} >
            <Card
              cover={
                <img
                  style={{ height: '350px' }}
                  alt=""
                  src={maria}
                />
              }
              actions={[
                <FacebookOutlined onClick={() => a('https://www.facebook.com/')} />,
                <WhatsAppOutlined onClick={() => a('https://www.facebook.com/')} />,
                <InstagramOutlined onClick={() => a('https://www.facebook.com/')} />,
              ]}
            >


              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="MARIA STHEFANY FLORES NUNTON"
                description="En esta oportunidad mi objetivo personal e profesional como lo vine teniendo desde hace muchos años atrás y como no hacerlo realidad es brindar asesoría jurídica y proceso judiciales sin fines de lucro, a fin de debatir las injusticias que son vulnerados las personas, asimismo ayudar a todas las personas que se encuentren en busca de asesores capacitados como nosotros, estamos para servirle."
              />
            </Card>
          </Col>
          <Col style={{ padding: "0 3% 0 3%" }} xs={24} sm={12} md={12} lg={6} xl={6} >
            <Card
              cover={
                <img
                  style={{ height: '350px' }}
                  alt=""
                  src={kathe}
                />
              }
              actions={[
                <FacebookOutlined onClick={() => a('https://www.facebook.com/')} />,
                <WhatsAppOutlined onClick={() => a('https://www.facebook.com/')} />,
                <InstagramOutlined onClick={() => a('https://www.facebook.com/')} />,
              ]}
            >

              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="KATHERINE REYMUNDO CRISOSTOMO"
                description="Mi objetivo como persona y profesional es brindar solución legal eficaz frente a las situaciones que enfrentan las personas en situación de riesgo y vulnerabilidad, a fin de colabora con el cese de falta de informacion sobre sus derechos."
              />
            </Card>
          </Col>
          <Col style={{ padding: "0 3% 0 3%" }} xs={24} sm={12} md={12} lg={6} xl={6} >
            <Card
              cover={
                <img
                  style={{ height: '350px' }}
                  alt=""
                  src={rudi}
                />
              }
              actions={[
                <FacebookOutlined onClick={() => a('https://www.facebook.com/')} />,
                <WhatsAppOutlined onClick={() => a('https://www.facebook.com/')} />,
                <InstagramOutlined onClick={() => a('https://www.facebook.com/')} />,
              ]}
            >

              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="RUDITZA GONZALES ANCA"
                description="Mi objetivo con este proyecto es poder ayudar a las personas con escasos recursos y poder orientar en cuanto a sus derechos de manera profesional y personal como asesora legal."
              />
            </Card>
          </Col>
          <Col style={{ padding: "0 3% 0 3%" }} xs={24} sm={12} md={12} lg={6} xl={6} >
            <Card
              cover={
                <img
                  style={{ height: '350px' }}
                  alt=""
                  src={pilar}
                />
              }
              actions={[
                <FacebookOutlined onClick={() => a('https://www.facebook.com/')} />,
                <WhatsAppOutlined onClick={() => a('https://www.facebook.com/')} />,
                <InstagramOutlined onClick={() => a('https://www.facebook.com/')} />,
              ]}
            >

              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="KATHERINE DEL PILAR BRICEÑO GOMEZ"
                description="Mi objetivo personal y profesional es demostrar mis habilidades como asesor legal, con el fin de querer ayudar a las personas vulnerables que necesiten ayuda jurídica."
              />
            </Card>
          </Col>
          <Col style={{ padding: "0 3% 0 3%" }} xs={24} sm={12} md={12} lg={6} xl={6} >
            <Card
              cover={
                <img
                  style={{ height: '350px' }}
                  alt=""
                  src={nathy}
                />
              }
              actions={[
                <FacebookOutlined onClick={() => a('https://www.facebook.com/')} />,
                <WhatsAppOutlined onClick={() => a('https://www.facebook.com/')} />,
                <InstagramOutlined onClick={() => a('https://www.facebook.com/')} />,
              ]}
            >

              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col style={{ padding: "0 3% 0 3%" }} xs={24} sm={12} md={12} lg={6} xl={6} >
            <Card
              cover={
                <img
                  style={{ height: '350px' }}
                  alt=""
                  src={paulo}
                />
              }
              actions={[
                <FacebookOutlined onClick={() => a('https://www.facebook.com/')} />,
                <WhatsAppOutlined onClick={() => a('https://www.facebook.com/')} />,
                <InstagramOutlined onClick={() => a('https://www.facebook.com/')} />,
              ]}
            >

              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col style={{ padding: "0 3% 0 3%" }} xs={24} sm={12} md={12} lg={6} xl={6} >
            <Card
              cover={
                <img
                  style={{ height: '350px' }}
                  alt=""
                  src={asesor}
                />
              }
              actions={[
                <FacebookOutlined onClick={() => a('https://www.facebook.com/')} />,
                <WhatsAppOutlined onClick={() => a('https://www.facebook.com/')} />,
                <InstagramOutlined onClick={() => a('https://www.facebook.com/')} />,
              ]}
            >

              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col style={{ padding: "0 3% 0 3%" }} xs={24} sm={12} md={12} lg={6} xl={6} >
            <Card
              cover={
                <img
                  style={{ height: '350px' }}
                  alt=""
                  src={shirley}
                />
              }
              actions={[
                <FacebookOutlined onClick={() => a('https://www.facebook.com/')} />,
                <WhatsAppOutlined onClick={() => a('https://www.facebook.com/')} />,
                <InstagramOutlined onClick={() => a('https://www.facebook.com/')} />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col style={{ padding: "0 3% 0 3%" }} xs={24} sm={12} md={12} lg={6} xl={6} >
            <Card
              cover={
                <img
                  style={{ height: '350px' }}
                  alt=""
                  src={angi}
                />
              }
              actions={[
                <FacebookOutlined onClick={() => a('https://www.facebook.com/')} />,
                <WhatsAppOutlined onClick={() => a('https://www.facebook.com/')} />,
                <InstagramOutlined onClick={() => a('https://www.facebook.com/')} />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>

        </Row>

      </div> */}

      <div style={{ textAlign: 'center', marginBottom: '25px', paddingTop: '30px' }}>
        <h1>Consulta Virtual</h1>
        <img style={{ width: '80%', padding: '5% 0 5% 0' }} src={consulta} alt="" />
        <Row gutter={16}>
          <Col span={14} style={{ textAlign: "end" }}>
            <FontAwesomeIcon className='icon' icon={faBriefcaseClock} />
            <span style={{ fontSize: "25px" }} >¿Necesita una consulta virtual?</span>
          </Col>
          <Col span={10} style={{ textAlign: "initial" }}>
            <Button className='btnConsuta'>CONSULTA</Button>
          </Col>
        </Row>

      </div>
    </>
  )
}
