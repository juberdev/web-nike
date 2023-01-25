
import { BackwardOutlined, ForwardOutlined } from '@ant-design/icons';
import { Col, FloatButton, Modal, Row } from 'antd'
import { useState } from 'react';
import "../styles/component.scss"


function ModalServi(props) {

    const { openModal, setOpenModal, dataEnviar, position } = props;
    const [positionActual, setPositionActual] = useState(position);

    const siguiente = () => {
        const max = dataEnviar.length;

        // console.log(max,'xdxd');
        // console.log(positionActual,'xdxd');
        if (positionActual + 1 < max) {
            setPositionActual(positionActual + 1)
        }
    }

    const atras = () => {
        // const max = dataEnviar.length;

        // console.log(max,'xdxd');
        // console.log(positionActual,'xdxd');
        if (positionActual !== 0) {
            setPositionActual(positionActual - 1)
        }
    }

    return (
        <Modal
            title={dataEnviar[position].title}
            open={openModal}
            onOk={() => setOpenModal(false)}
            onCancel={() => setOpenModal(false)}
            footer={null}
            width="50%"
            centered
        >
            <Row>
                <Col span={12}>
                    {dataEnviar[positionActual].descripcion}
                </Col>
                <Col span={12}>
                    <img style={{ width: '100%' }} src={dataEnviar[positionActual].foto} alt='' />

                </Col>

            </Row>

            {/* <div> */}
            <Row>
                <Col span={12}>
                    <div className='containerTool'>

                        <FloatButton
                            className='a'
                            onClick={atras}
                            style={{ left: '2%', top: '50%', backgroundColor: '#970B17', border: "2px solid #970B17" }}
                            icon={<BackwardOutlined className='floatIcons' />} />
                    </div>
                </Col>
                <Col span={12}>
                    <div className='containerTool'>
                        <FloatButton
                            className='a'
                            onClick={siguiente}
                            style={{ backgroundColor: '#970B17', top: '50%', border: "2px solid #970B17" }}
                            icon={<ForwardOutlined className='floatIcons' />} />
                    </div>

                </Col>

            </Row>

            {/* </div> */}
        </Modal>
    )
}

export default ModalServi