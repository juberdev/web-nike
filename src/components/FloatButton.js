import { FloatButton, Tooltip } from 'antd';
import { FacebookFilled, InstagramFilled, WhatsAppOutlined } from '@ant-design/icons'
// import "../styles/component.scss"
function FloatButtons() {
  return (
    <FloatButton.Group shape="circle" style={{ right: 25 }}>
        <Tooltip placement="left" title="Facebook" color={'#970B17'} className="containerTool" key={1}>
          <FloatButton
            style={{ backgroundColor: '#970B17', border: "2px solid #970B17" }}
            icon={<FacebookFilled className='floatIcon' />} />
        </Tooltip>
        <Tooltip placement="left" title="WhasApp" color={'#970B17'} className="containerTool" key={2}>
          <FloatButton
           style={{ backgroundColor: '#970B17', border: "2px solid #970B17" }}
          icon={<WhatsAppOutlined className='floatIcon'  />} />
        </Tooltip>
        <Tooltip placement="left" title="Instragram" color={'#970B17'} className="containerTool" key={3}>
          <FloatButton 
           style={{ backgroundColor: '#970B17', border: "2px solid #970B17" }}
           icon={<InstagramFilled className='floatIcon' />} />
        </Tooltip>
      </FloatButton.Group>
  )
}

export default FloatButtons