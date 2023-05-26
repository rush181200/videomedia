import { ArrowBackIosOutlined } from '@material-ui/icons'
import './watch.scss'
import v from '../../components/listitem/ik.mp4'

export default function Watch() {
  return (
    
        <div className="watch">
         
            <div className="back">
              <ArrowBackIosOutlined className='icon'/>
              Home
            </div>
          
          <video className="video" autoPlay muted progress controls src={v} />
        </div>
      );
}
