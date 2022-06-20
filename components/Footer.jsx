import { withRouter } from "next/router";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="box">
            <a
              aria-label="Email"
              href="mailto:ivan.urra.dev@gmail.com"
              rel="noopener"
              target="_blank"
            >
              <i className="fas fa-envelope-open foot">
                <span style={{ display: "none" }}>Email</span>
              </i>
            </a>
          </li>

          <li className="box">
            <a
              aria-label="Github"
              href="https://github.com/ivanurra"
              rel="noopener"
              target="_blank"
            >
              <i className="fab fa-github foot">
                <span style={{ display: "none" }}>Github</span>
              </i>
            </a>
          </li>

          <li className="box">
            <a
              aria-label="LinkedIn"
              rel="noopener"
              href="https://www.linkedin.com/in/ivanurra/"
              className="linkedin"
              target="_blank"
            >
              <i className="fab fa-linkedin foot">
                <span style={{ display: "none" }}>LinkedIn</span>
              </i>
            </a>
          </li>
        </ul>

        <p className="footer-name">
          &copy; {new Date().getFullYear()} Designed & Built by Ivan Urra
        </p>
      </nav>
    </footer>
  );
}

export default withRouter(Footer);
