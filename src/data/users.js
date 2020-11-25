cons;

const usuarios = [
  {
    id: "1",
    nombre: "Ana Lopez",
    email: "ana@tottus.com",
    cargo: "Asesora de Call center",
    negocio: "TOTTUS",
    pais: "CHILE",
    tipoUsuario: "REGULAR",
  },
  {
    id: "2",
    nombre: "Pedro Alvarado",
    email: "pedro@sodimac.com",
    cargo: "Asesor servicio al cliente",
    negocio: "SODIMAC",
    pais: "CHILE",
    tipoUsuario: "REGULAR",
  },
  {
    id: "3",
    nombre: "Carla Espinoza",
    email: "pedro@sodimac.com",
    cargo: "Asesor servicio al cliente",
    negocio: "FALABELLA",
    pais: "CHILE",
    tipoUsuario: "REGULAR",
  },
  {
    id: "3",
    nombre: "Jose Martínez",
    email: "jose@falabella.com",
    cargo: "Asesor servicio al cliente",
    negocio: "FALABELLA",
    pais: "CHILE",
    tipoUsuario: "REGULAR",
  },
];

const iconos = {
  SODIMAC:
    "https://pbs.twimg.com/profile_images/628570533064507392/o46Pj8L3.png",
  FALABELLA:
    "https://play-lh.googleusercontent.com/_G7AjsytG3O0gkXyditshL9B2tbT33Ou5Um7l9Tww5XhRavYJ_gTExcDMHRT3413m8s=s180",
  TOTTUS:
    "data:image/png;base64,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",
};

export { iconos, usuarios };
