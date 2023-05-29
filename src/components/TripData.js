import "./TripStyles.css";

function TripData(props) {
  return (
    
      <div className="card-row">
        <div className="img-con">
          <img src={props.img1} alt="content" />
        </div>
        <div className="content">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    
  );
}

export default TripData;
