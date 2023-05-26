import { Search,Notifications, ArrowDropDown } from '@material-ui/icons'
import { useState } from 'react'
import './navbar.scss'

export default function Navbar() {
    const [isScrolled,setisScriolled] = useState(false);
    window.onscroll=()=>{
        setisScriolled(window.pageYOffset ===0? false : true);
        return ()=> (window.onscroll=null);
    }
  return (
    <div className={isScrolled? 'navbar scrolled' : 'navbar'}>
     <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
            <span>Home</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>Mylist</span>
        </div>
        <div className="right">
            <Search className='icon' />
            <span>KIDS</span>
            <Notifications  className='icon'/>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="profile">
            <ArrowDropDown  className='icon'/>
            <div className="options">
                <span>Settings</span>
                <span>Logout</span>
            </div>
            </div>
        </div>
          </div>
          
    </div>
  )
}
