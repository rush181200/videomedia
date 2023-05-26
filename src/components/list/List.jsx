import ListItem  from '../listitem/Listitem'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import './list.scss'
import { useRef, useState } from 'react'

export default function List() {
    const listref = useRef()
    const [slideNumber,setSlideNumber] = useState(0)
    const [isMoved,setisMoved]= useState(false)

  const handleClick=(direction)=>{
    setisMoved(true)
    let distance = listref.current.getBoundingClientRect().x - 50
    if(direction==="left" && slideNumber >0 ){
        setSlideNumber(slideNumber-1)
        listref.current.style.transform = `translateX(${230+ distance}px)`
    }
    if(direction==="right" && slideNumber <5){
        setSlideNumber(slideNumber+1)
        listref.current.style.transform = `translateX(${-230+ distance}px)`
    }
  }

  return (
    <div className='list'>
      <div className="listTitle">Continue to watch</div>
      <div className="wrapper">
        <ArrowBackIosOutlined className='slideArrow left' onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
        <div className="container" ref={listref}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
            
        </div>
        <ArrowForwardIosOutlined className='slideArrow right' onClick={()=>handleClick("right")}/>
      </div>
    </div>
  )
}
