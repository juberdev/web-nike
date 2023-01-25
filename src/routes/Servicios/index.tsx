import { Card, Col, Divider, Row } from 'antd'
import { useState } from 'react';
import { data } from '../../components/data.js'
import ModalServi from '../../components/ModalServi.js';
import Slider from '../../components/slider.js';
import '../../styles/servicio.scss';


function Servicios() {
  const [openModal, setOpenModal] = useState(false);
  const [dataEnviar, setDataEnviar] = useState(null);
  const [position, setPosition] = useState<number>(0);

  const mostrarModal = (data: any, index: number) => {
    setPosition(index);
    setDataEnviar(data);
    setOpenModal(true);
  }
  return (
    <>
      <Slider title="Nuestros Servicios" paralax="parallaxServicio" />

      <div style={{ textAlign: 'center', width: '80%', margin: 'auto', padding: '3% 0 3% 0' }}>
        <Divider style={{ fontSize: '30px', paddingBottom: "40px" }} >Nuestra Firma</Divider>
        <span>
          Nuestra firma surge ante la necesidad de una asesoría especializada que de frente a temas de derecho de la competencia
          (protección al consumidor, propiedad intelectual, competencia desleal, barreras burocráticas, etc.) hoy en día bajo la
          competencia del Instituto Nacional de Defensa de la Competencia y de la propiedad Intelectual – Indecopi.
        </span>
        <div style={{height:'60px'}}>

        </div>
        <div>
          <Row gutter={16}>
            {
              data.map((element, index) => {

                return (
                  <Col xs={24} sm={12} md={8} lg={8} xl={6}>
                    <Card
                      onClick={() => mostrarModal(data, index)}
                      className='carta'
                      cover={
                        <div
                          className='contenedor'
                        >
                          <img
                            alt="example"
                            className='cardImg'
                            src={element.foto}
                          />
                        </div>
                      }
                    >
                      <Card.Meta
                        // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={element.title}
                        description={element.title}
                      />
                    </Card>
                  </Col>
                )
              })
            }

          </Row>
          {
            openModal ?
              <ModalServi position={position} openModal={openModal} setOpenModal={setOpenModal} dataEnviar={dataEnviar} />
              : null
          }
        </div>
      </div>

    </>

  )
}

export default Servicios