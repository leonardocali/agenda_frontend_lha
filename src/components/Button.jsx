import "../css/estilos.css";

const Button = ({ name, handled, id }) => {
  
    const obtenerClaseDinamica = (nombreBoton) => {
    // Convertimos a minúsculas para evitar errores de mayúsculas/minúsculas
    switch (nombreBoton?.toLowerCase()) {
      case "add":
        return "btn-submit btn-add";
      case "update":
        return "btn-submit btn-update";
      case "edit":
        return "btn-action btn-edit";
      case "eliminar":
      case "delete": // Soporta ambos nombres por si acaso
        return "btn-action btn-delete";
      default:
        return "btn-submit"; // Clase por defecto si no coincide ninguno
    }
  };
  const claseFinal = obtenerClaseDinamica(name);
  return (
    <>
      <button
        type="submit"
        onClick={handled}
        id={id}
        name={"btn_" + name}
        className={claseFinal}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
