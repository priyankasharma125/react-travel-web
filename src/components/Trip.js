import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Our Trips are more affordable and can search on maps.</p>
      <div className="cards">
      <TripData 
      img1={Trip1}
      heading="Dal Lake"
      text="If you are looking for hike thats a more little challenging to start with your journey . Lets start with our soulmate love jouney of ashu love monu tiwari.

      Taal volcano, which sits in a picturesque lake south of Manila, exploded with a “short-lived” burst at 7.22 am on Saturday, the Philippine Institute of Volcanology and Seismology said in a statement.
      
      It warned further eruptions were possible, which it said could trigger dangerous, fast-moving volcanic flows of gas, ash and debris, as well as a tsunami."
      />
      <TripData 
      img1={Trip2}
      heading="Manali"
      text="If you are looking for hike thats a more little challenging to start with your journey . Lets start with our soulmate love jouney of ashu love monu tiwari.

      Taal volcano, which sits in a picturesque lake south of Manila, exploded with a “short-lived” burst at 7.22 am on Saturday, the Philippine Institute of Volcanology and Seismology said in a statement.
      
      It warned further eruptions were possible, which it said could trigger dangerous, fast-moving volcanic flows of gas, ash and debris, as well as a tsunami."
      /><TripData 
      img1={Trip3}
      heading="Kasol"
      text="If you are looking for hike thats a more little challenging to start with your journey . Lets start with our soulmate love jouney of ashu love monu tiwari.

      Taal volcano, which sits in a picturesque lake south of Manila, exploded with a “short-lived” burst at 7.22 am on Saturday, the Philippine Institute of Volcanology and Seismology said in a statement.
      
      It warned further eruptions were possible, which it said could trigger dangerous, fast-moving volcanic flows of gas, ash and debris, as well as a tsunami."
      />
      </div>
  </div>
  );
}

export default Trip;
