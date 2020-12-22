import React from 'react'


export const AboutScreen = () => {
    return (
        <div className="container-fluid p-0 animate__animated animate__zoomIn">
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Roldan Catalini
                        <span className="text-primary"> Juan Ignacio</span>
                    </h1>
                    <div className="subheading mb-5">
                        Contactame:  
                        <a href="mailto:juanignacioroldan01@gmail.com">juanignacioroldan01@gmail.com</a>
                    </div>
                    <p className="lead mb-5">Soy un estudiante de Ingenieria en Sistemas de Información. </p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/juan-ignacio-a718761a3/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/juanignaciorc" target="blank" ><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="https://drive.google.com/file/d/1ZMkY0jSurHALpjLA4Ntgtvg2YQK42O5I/view?usp=sharing" target="blank" ><i className="far fa-file"></i></a>
                        <a className="social-icon" href="https://wa.me/+5492665007124" target="blank" ><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}
