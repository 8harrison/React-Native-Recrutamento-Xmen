const replaceFrase = (local) => {
  while (local.indexOf(' ') >= 0) {
    local = local.replace(' ', '%20');
    local = local.replace(', ', '%20');
  }
  return local;
};

 const sliceLocationInformation = (information) => {
    information = information.split(',');
    if(information.length == 2) {
      return {
        estado: information[0],
        pais: information[1],
      }
    }
    return {
      cidade: information[0],
      estado: information[information.length - 3].trim(),
      pais: information[information.length - 1].trim(),
    };
  };

export { replaceFrase, sliceLocationInformation };
