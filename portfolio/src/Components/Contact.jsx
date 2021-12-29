export default function Contact() {
  return (
    <footer>
      <div className="container">
        <h2 className="footer--title">Contact Me</h2>
        <ul className="contacts">
          <li className="location">
            <div className="contact--grid">
              <div className="footer--icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>

              <h3 className="contact--title">Location: </h3>
              <p>Jurong East, Singapore</p>
            </div>
          </li>
          <li>
            <div className="contact--grid">
              {/* <a href="mailto:wuyifan2001@gmail.com">Mail</a> */}
              <div className="footer--icon mail--link">
                <a
                  href="https://mail.google.com/mail/u/0/?fs=1&to=wuyifan2001@gmail.com&su&cc&bcc&body&tf=cm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </div>

              <h3 className="contact--title">Mail: </h3>
              <p>wuyifan2001@gmail.com</p>
            </div>
          </li>
          <li>
            <div className="contact--grid">
              <div className="footer--icon">
                <i className="fas fa-phone"></i>
              </div>

              <h3 className="contact--title">Call</h3>
              <p> +65 9440 7553</p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
