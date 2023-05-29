import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the Opportunity to see alot</p>
      <DestinationData 
      className="des"
      heading="Taal Volcano"
      text="Thousands of people fled their homes near a Philippine volcano after an eruption sent ash and steam hundreds of metres into the sky.

      Taal volcano, which sits in a picturesque lake south of Manila, exploded with a “short-lived” burst at 7.22 am on Saturday, the Philippine Institute of Volcanology and Seismology said in a statement.
      
      It warned further eruptions were possible, which it said could trigger dangerous, fast-moving volcanic flows of gas, ash and debris, as well as a tsunami."
      img1={Mountain1}
      img2={Mountain2}
      
      />
      <DestinationData 
      className="des1"
      heading="Mt. Daguldul"
      text="If you are looking for hike thats a more little challenging to start with your journey . Lets start with our soulmate love jouney of ashu love monu tiwari.

      Taal volcano, which sits in a picturesque lake south of Manila, exploded with a “short-lived” burst at 7.22 am on Saturday, the Philippine Institute of Volcanology and Seismology said in a statement.
      
      It warned further eruptions were possible, which it said could trigger dangerous, fast-moving volcanic flows of gas, ash and debris, as well as a tsunami."
      img1={Mountain3}
      img2={Mountain4}
      
      />
    </div>

  );
};

export default Destination;
