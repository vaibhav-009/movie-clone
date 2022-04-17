import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"} </span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="historical">Historical</option>
            <option value="romance">Romance</option>
            <option value="horror">Horror</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />

      <div className="info">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          perferendis, dolore molestias cumque similique saepe itaque mollitia
          quam temporibus labore repellat corporis. Officia magnam eligendi
          quisquam corrupti itaque non obcaecati.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
