import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Subject"/>
       <textarea placeholder="Message" rows={4}/>
       <button className="send">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
