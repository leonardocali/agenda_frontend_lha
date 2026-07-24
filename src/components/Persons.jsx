import Button from "./Button";
import "../css/estilos.css";

const Persons = ({ data, handledM, handledU }) => {
  const listItems = data.map((person,key) => 
    <li key={key} className="agenda-card">
      <div className="card-info">
        <span className="contact-name">{person.name}</span>
        <span className="contact-number">
          <span className="phone-icon">📱</span> {person.number}
        </span>
      </div>

      <div className="card-actions">
        <Button
          handled={handledM}
          name="Edit"
          id={person._id}
          className="btn-action btn-edit"
        />
        <Button
          handled={handledU}
          name="Delete"
          id={person._id}
          className="btn-action btn-delete"
        />
      </div>
    </li>
  );

  return (
    <>
      <div className="title-main">
        <h2>Contacts</h2>
      </div>
      {data.length === 0 && (
        <div className="not-persons">There are no records in the agenda</div>
      )}
      <ul className="agenda-list">{listItems}</ul>
    </>
  );
};

export default Persons;
