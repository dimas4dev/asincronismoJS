const somethingWillhappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};
somethingWillhappen()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

const somethingWillHappen2 = () => {
  // retuornamos la promesa
  return new Promise((resolve, reject) => {
    // Si es verdadero, devolvemos True en 2 segundos
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    }
    // Si no entonces devolvemos el error
    // De esta forma "new Error" podemos debbugear mejor
    else {
      const error = new Error("Whoppps!");
      reject(error);
    }
  });
};
//ejecutamos la Funcion 2
somethingWillHappen2()
  //Si obtenemos un resolve
  .then((response) => console.log(response))
  //si obtenemos un reject
  .catch((err) => console.error(err));

Promise.all([somethingWillHappen2(), somethingWillhappen()])
  .then((response) => {
    console.log(`Array of results ${response}`);
  })
  .catch((error) => {
    console.error(error);
  });
