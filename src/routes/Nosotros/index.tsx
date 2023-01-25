import { Divider } from 'antd';
import nosotros from '../../assets/nosotros.png';
import Slider from '../../components/slider';
import '../../styles/nosotros.scss'


function Nosotros() {
  return (
    <>



      <Slider title="Nosotros" paralax="parallaxNosotros"/>

      <div className='nosotros'>
        <div className='deff'>
          Somos un estudio especializado en casos de derecho de Familia, Sucesiones y Personas. Ofrecemos a nuestros clientes, un servicio eficiente y eficaz, con un staff de abogados especializados, quienes absolverán sus preguntas y desarrollarán la estrategia de defensa más conveniente a sus intereses.
          En Villena Abogados nuestro enfoque es simple, ayudar a nuestros clientes a solucionar sus problemas para que puedan continuar su vida y actividades con total tranquilidad.
        </div>
        {/* <img src={fondo} alt='' style={{ width: "80%", margin: 'auto', paddingTop: '50px' }} /> */}

        <div style={{ height: '600px' }}>
          <Divider style={{ fontSize: '30px', paddingBottom: "50px" }} >Que nos Impulsa a mejorar</Divider>

          <div style={{ margin: 'auto', width: "80%" }}>
            <div style={{ float: 'left', width: '50%', textAlign: "initial", height: "400px", paddingTop: "8%" }}>
              <h3>Misión</h3><br />
              <span>Ofrecemos un servicio con los altos estándares de calidad en los tiempos establecidos con nuestros clientes. La combinación de estos elementos permite que nuestros clientes estén satisfechos y podamos desarrollar con ellos una relación de largo plazo.</span>
              <br /><br />
              <h3>Visión</h3> <br />
              <span>Somos líderes en el mercado de servicios legales y contables en el Perú y en los cinco continentes, mediante un trabajo planificado según la necesidad del negocio de cada cliente, lo que nos permite otorgar un valor agregado al servicio que prestamos.</span>
            </div>
            <div style={{ width: '50%', float: 'right', }}>
              <img src={nosotros} alt='' style={{ width: "80%", margin: 'auto', paddingTop: '50px' }} />
            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default Nosotros