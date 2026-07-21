import Button from "./Button";
import "../css/estilos.css";

const PersonsForm = ({
  name,
  number,
  handledName,
  handledNumber,
  handleButtonAdd,
  handleButtonUpdate,
  state_btn_update,
  state_btn_add,
}) => {
  return (
    <>
      <form className="agenda-form">
        <h2 className="form-title">Add a new</h2>

        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            className="form-input"
            value={name}
            onChange={handledName}
            placeholder="Ej. Leonardo HerreraPérez"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Number:</label>
          <input
            className="form-input"
            value={number}
            onChange={handledNumber}
            placeholder="Ej. 555-1234"
            type="text"
            pattern="\d{10}"
            maxLength='10'
            inputMode="numeric"
            title="10 digit numbers only"
          />
        </div>

        {/* Contenedor de acciones unificado */}
        <div className="form-actions">
          {state_btn_add && (
            <Button
              name="Add"
              handled={handleButtonAdd}
              className="btn-submit btn-add"
            />
          )}
          {state_btn_update && (
            <Button
              name="Update"
              handled={handleButtonUpdate}
              className="btn-submit btn-update"
            />
          )}
        </div>
      </form>
    </>
  );
};

export default PersonsForm;
