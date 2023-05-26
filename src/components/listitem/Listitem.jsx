import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'
import './listitem.scss'
import v from '../listitem/ik.mp4'

export default function Listitem({index}) {
  const [isHovered, setisHover] = useState(false)
   
   
  return (
    <div className='listitem'
    style={{left:isHovered && index *225-50+index * 2.5}}
     onMouseEnter={()=>setisHover(true)} onMouseLeave={()=>setisHover(false)}>
        <img src="https://bleedingcool.com/wp-content/uploads/2020/08/Enola-Holmes-Poster-1200x628.jpg" alt="" />
       {isHovered && (
        <>
        <video src={v}autoPlay={true} loop muted/>
        <div className="itemInfo">
         <div className="icons">
         <PlayArrow className='icon'/>
          <Add  className='icon'/>
          <ThumbUpAltOutlined  className='icon'/>
          <ThumbDownAltOutlined  className='icon'/>
         </div>
          <div className="itemInfoTop">
            <span>1 h 14 mins</span>
            <span className='limit'>+16</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Dolorem doloremque aliquam totam 
             
          </div>
          <div className="genre">Action</div>
        </div> </> 
        )}
    </div>
  );
}
