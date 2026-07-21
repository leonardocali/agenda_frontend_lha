import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const showAlertUser = async (errorBackend) => {
  const mensaje = errorBackend || '';
  console.log(mensaje);
  

  // 1. Validar si el nombre ya existe
  if (mensaje.includes('name')) {
    return MySwal.fire({
      title: 'Nombre Duplicado',
      text: 'Ya tienes un contacto registrado con este nombre en tu agenda.',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Corregir'
    });
  }

  // 2. Validar si el número ya existe
  if (mensaje.includes('phone')) {
    return MySwal.fire({
      title: 'Número Existente',
      text: 'Este número de teléfono ya está asignado a otro contacto.',
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Verificar número'
    });
  }

  // 3. Validar si el número ya existe
  if (mensaje.includes('update')) {
    return MySwal.fire({
      title: 'User update',
      text: 'The user was update succesfully.',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Close'
    });
  }

   // 4. Usuario eliminado correctamente
  if (mensaje.includes('deleteconfirm')) {
    const result = await MySwal.fire({
      title: 'Delete user',
      text: 'The user cannot retrieve it again.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete',
      cancelButtonColor: '#d4301a',
      cancelButtonText: 'Close'
    });
    return result.isConfirmed;
  }

    // 5. Usuario agregado correctamente
  if (mensaje.includes('add')) {
    return MySwal.fire({
      title: 'Create user',
      text: 'The user was create succesfully.',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Close'
    });
  }
      // 6. Valida campos en blanco
  if (mensaje.includes('blank')) {
    return MySwal.fire({
      title: 'Create user',
      text: 'The field is emppty plesea validate this.',
      icon: 'warning' ,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Close'
    });
  }
    //Eliminar con confirmacion
    if (mensaje.includes('deleteSuccess')) {
    return MySwal.fire({
      title: 'Delete user',
      text: "The user was delete succesfully.",
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Close',
    });
  }
  //Espacios en nombre

  if(mensaje.includes('spaceWhite')){
    return MySwal.fire({
      title: 'Create User',
      text: "The field cannot have white spaces",
      icon:'info',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Close',
    })
  }


  // Error genérico (por si falla otra cosa)
  return MySwal.fire({
    title: 'Error in the agenda',
    text: mensaje || 'The contact could note be saved',
    icon: 'error',
    confirmButtonColor: '#d33'
  });
};