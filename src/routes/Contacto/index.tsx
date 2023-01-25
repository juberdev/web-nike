import { Button, Col, Form, Input, Row } from 'antd'
import Map from './map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faLocationDot, faClock, faUserSecret, faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import "../../styles/contacto.scss";
import Slider from '../../components/slider';
// import cont from '../../assets/bg-contactanos.jpg';

library.add(fas, faLocationDot, faClock, faUserSecret, faEnvelopeCircleCheck)
function Contacto() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ width: "100%" }}>
      {/* <img className='imagen' src={cont} alt="" /> */}
      <Slider title="Contactanos" paralax="parallaxContacto" />
      {/* <div className='imagen'> */}
        <div style={{width:'100%' , textAlign:'center', padding:'50px 0 0 0'}}>
          {/* <h1 >Contactanos</h1>
           */}
          <h4 style={{  fontSize:'18px' }}>Nuestra información de contacto: Teléfono, Email, Dirección y más</h4>
        </div>
       {/* </div> */}


      <div className='container'>
        <div className="column">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          // initialValues={{ requiredMarkValue: requiredMark }}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          >
            <Row gutter={16}>
              <Col span={12} >
                <Form.Item name="nombre" label="Nombre">
                  <Input placeholder="Juan" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="apellido"
                  label="Apellido"
                >
                  <Input placeholder="Perez" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="correo"
              label="Correo"
              rules={[
                {
                  type: 'email',
                  message: 'Correo no valido, Ingrese un Correo Verdadero',
                },
                {
                  required: true,
                  message: 'Completar este campo',
                },
              ]}
            >
              <Input placeholder="ejemplo@correo.es" />
            </Form.Item>
            <Form.Item
              name="mensaje"
              label="Mensaje"
              rules={[
                {
                  required: true,
                  message: 'Completar este campo',
                },
              ]}
            >
              <Input.TextArea placeholder="Ingrese su mensaje" rows={4} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">Enviar</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="column02">
          <Row gutter={[16, 24]}>
            <Col span={2} >
              <FontAwesomeIcon className='icon' icon={faLocationDot} />
            </Col>
            <Col span={22} >
              <h3 >Av. Camino Real 1121 Of 704 - San Isidro</h3>
            </Col>
            <Col span={2} >
              <FontAwesomeIcon className='icon' icon={faClock} />
            </Col>
            <Col span={22} >
              <h3 >Lunes a Viernes 9:00 am - 6:00 p.m.</h3>
            </Col>
            <Col span={2} >
              <FontAwesomeIcon className='icon' icon={faUserSecret} />
            </Col>
            <Col span={22} >
              <h3 >Atención al Cliente : +51 924796106</h3>
            </Col>
            <Col span={2} >
              <FontAwesomeIcon className='icon' icon={faEnvelopeCircleCheck} />
            </Col>
            <Col span={22} >
              <h3 >info@veratorres.com.pe</h3>
            </Col>

            <img src='https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-dos-hombres-negocios-dandose-mano-companeros-negocio_49924-194.jpg?w=2000' alt='' />
          </Row>
        </div>
      </div>
      <Map />
    </div>
  )
}

export default Contacto