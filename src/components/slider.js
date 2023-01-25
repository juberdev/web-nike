import '../styles/component.scss'

function Slider(props) {
const {title, paralax} = props;

    return (
        <div className="container-fluid">
            <div className={paralax}>

                <div className='titleSlider'>
                    {title}
                </div>
            </div>
        </div>
    )
}

export default Slider