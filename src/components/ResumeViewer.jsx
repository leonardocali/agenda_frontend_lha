import { useState } from "react";
import '../css/resumeviewer.css'

export const ResumeViewer = () => {
  const [showModal, setShowModal] = useState(false);
  const downLoadUrl = "https://agenda-frontend-lha.vercel.app/docs/HV_Leonardo_Herrera_Alvarado.pdf";

  return (
    <div className="cv-container">
      <div className="cv-actions">
        {/* Botón de Previsualización */}
        <button className="btn btn-preview" onClick={() => setShowModal(true)}>
          <span className="icon"> </span> Preview CV
        </button>
        {/* Botón de Descarga Directa */}
        <a href={downLoadUrl} className="btn btn-download" download>
          <span className="icon"> </span> Donwload CV
        </a>
      </div>
      {/* Modal de Previsualización */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Preview CV</h3>
              <button className="close-btn" onClick={() => setShowModal(false)}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <iframe
                src={downLoadUrl}
                title="Previsualización CV"
                width="100%"
                height="550px"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
