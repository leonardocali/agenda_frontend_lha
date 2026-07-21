import Button from "./Button";
import "../css/estilos.css";

const Persons = ({ data, handledM, handledU }) => {
  return (
    <>
    <div className="title-main">
      <h2>Contacts</h2>
    </div>
      {data.length === 0 && (
        <div className="not-persons">There are no records in the agenda</div>
      )}

      <ul className="agenda-list">
        {data.map((person) => (
          <li key={person.id} className="agenda-card">
            {/* Zona Izquierda: Información del contacto */}
            <div className="card-info">
              <span className="contact-name">{person.name}</span>
              <span className="contact-number">
                <span className="phone-icon">📱</span> {person.number}
              </span>
            </div>

            {/* Zona Derecha: Botones de Acción */}
            <div className="card-actions">
              <Button
                handled={handledM}
                name="Edit"
                id={person.id}
                className="btn-action btn-edit"
              />
              <Button
                handled={handledU}
                name="Delete"
                id={person.id}
                className="btn-action btn-delete"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Persons;
