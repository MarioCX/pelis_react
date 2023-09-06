import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/luismario_cx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/luis-mario-cruz-xicotencatl-516401269/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Otros Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about">Sobre Nosotros</a>
              </li>
              <li>
                <a href="/contact">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <address>
              <p>Dirección: Av. 25 PTE Puebla, Pue.</p>
              <p>Email: luismario2712@gmail.com</p>
              <p>Teléfono: +52 222 159 2304</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
