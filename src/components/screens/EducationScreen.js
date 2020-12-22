import React from 'react'

export const EducationScreen = () => {
    return (
        <div className="container-fluid p-0 animate__animated animate__zoomIn">
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Colegio Don Bosco</h3>
                            <div className="subheading mb-3">Economia y gestion de las organizaciones</div>
                            <hr />
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Universidad Tecnologica Nacional - FRC </h3>
                            <div className="subheading mb-3">Estudiante de Ingeniería en sistemas</div>
                            <hr />
                        </div>
                        
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Instituto de Inglés William Shakespeare </h3>
                            <div className="subheading mb-3">Nivel de inglés avanzado</div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </div>
    )
}
