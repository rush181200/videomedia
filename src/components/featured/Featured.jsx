import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured({type}) {
  return (
    <div className='feature'>
        {type && (
            <div className="category">
                <span>{type === "movie"?"Movies":"Series"}</span>
                <select name="genre" id="genre">
                    <option value="">Genre</option>
                    <option value="">Adventure</option>
                    <option value="">Comedy</option>
                    <option value="">Romace</option>
                    <option value="">Horror</option>
                    <option value="">Thriller</option>
                    <option value="">Action</option>
                    <option value="">Drama</option>
                </select>
            </div>
        )}
      <img src="https://deadline.com/wp-content/uploads/2021/12/Dont-Look-Up-poster.jpg" alt="" />
        <div className="info">
        <img src="https://joesdaily.com/wp-content/uploads/2021/09/dont-look-up-movie-poster.png" alt="" />
        <span className="desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Fugit officia voluptatem voluptate eaque libero similique repellat error qui magnam reprehenderit, alias minima,
             facere aspernatur incidunt itaque sint quasi labore? Harum.
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
       </div>
    </div>
  )
}
