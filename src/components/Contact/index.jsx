import "./style.css";

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact me!</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107421.5588905566!2d74.7899246108819!3d32.71465473382735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e84bf169d3525%3A0xf233488eeb8fd8d!2sJammu!5e0!3m2!1sen!2sin!4v1618667900067!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="myLoc"
            >
            </iframe>

            <h4>Phone:</h4>
            <p>+91 91497559XX</p>

            <h4>Email</h4>
            <p>sameep.sharma98@gmail.com</p>

            <h4>Address</h4>
            <p>H.no XX Sec. X, XXXXX Nagar, Jammu, J&K, India.</p>
        </div>
    );
};

export default Contact;