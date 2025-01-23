import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="container text-center text-light">
        <div className="container pt-4">
          <section className=" mt-5">
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.linkedin.com/in/gaurav-pawse-b612b326b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              role="button"
              target="_main"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              data-mdb-ripple-init
              className="btn btn-link btn-floating btn-lg text-light m-1"
              href="https://www.instagram.com/gaurav_pawse123?igsh=a3lnODlvc2JpbWV2"
              target="_main"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </section>
          <div className="text-center p-3">© 2025 Copyright: Devloped by : @Gaurav Pawse</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
