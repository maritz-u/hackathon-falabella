const listaReclamos = [
  {
    usuario: "Carla Espinoza",
    fecha: "03/11/2020",
    medio: "local",
    materia: "Accidente",
    interiorLocal: "no",
    tipoAccidente: "inseguridad personal",
    lesion: "Leve",
    pais: "Chile",
    monto: "100.000",
  },
  {
    usuario: "Pedro Alvarado",
    fecha: "03/11/2020",
    medio: "local",
    materia: "Accidente",
    interiorLocal: "si",
    tipoAccidente: "inseguridad personal",
    lesion: "Leve",
    pais: "Chile",
    monto: "100.000",
  },
  {
    usuario: "Pedro Alvarado",
    fecha: "10/11/2020",
    medio: "local",
    materia: "Publicidad",
    interiorLocal: "no",
    tipoAccidente: "inseguridad personal",
    lesion: "Leve",
    pais: "Chile",
    monto: "100.000",
  },
  {
    usuario: "Ana Lopez",
    fecha: "20/11/2020",
    medio: "local",
    materia: "Despacho del producto",
    interiorLocal: "no",
    tipoAccidente: "inseguridad personal",
    lesion: "Leve",
    pais: "Chile",
    monto: "100.000",
  },
  {
    usuario: "Pedro Alvarado",
    fecha: "20/11/2020",
    medio: "local",
    pais: "Perú",
    materia: "Despacho del producto",
    interiorLocal: "sí",
    tipoAccidente: "inseguridad personal",
    lesion: "Leve",
    monto: "100.000",
  },
  {
    usuario: "Pedro Alvarado",
    fecha: "20/11/2020",
    medio: "local",
    pais: "Colombia",
    materia: "Publicidad",
    interiorLocal: "no",
    tipoAccidente: "inseguridad personal",
    lesion: "Leve",
    monto: "100.000",
  },
  {
    usuario: "Pedro Alvarado",
    fecha: "20/11/2020",
    medio: "local",
    pais: "Colombia",
    materia: "Accidente",
    interiorLocal: "no",
    tipoAccidente: "inseguridad personal",
    lesion: "Gravisimo",
    monto: "500.000",
  },
  {
    usuario: "Pedro Alvarado",
    fecha: "20/11/2020",
    medio: "local",
    pais: "Perú",
    materia: "Publicidad",
    interiorLocal: "no",
    tipoAccidente: "inseguridad personal",
    lesion: "Grave",
    monto: "200.000",
  },
  {
    usuario: "Carla Espinoza",
    fecha: "20/11/2020",
    medio: "local",
    pais: "Perú",
    materia: "Publicidad",
    interiorLocal: "no",
    tipoAccidente: "inseguridad personal",
    lesion: "Leve",
    monto: "100.000",
  },
  {
    usuario: "Carla Espinoza",
    fecha: "20/11/2020",
    medio: "local",
    materia: "Uso del estacionamiento",
    interiorLocal: "no",
    tipoAccidente: "inseguridad personal",
    lesion: "Leve",
    pais: "Argentina",
    monto: "100.000",
  },
];

const listaDemandas = [
  {
    usuarioReporta: "Pedro Alvarado",
    fecha: "26/09/2020",
    materia: "Accidente",
    demandado: "Falabella",
    local: "Santiago 1",
    pais: "Chile",
    abogadoEncargado: "Pablo Rodriguez",
    resumen:
      "Luis Piagget interpone demanda de indemnización por daños y perjuicios hasta por la suma de USD 100,000.00, por accidente sufrido en el local Santiago 1: caída del cliente debido a una superficie mojada sin señalización de piso mojado",
  },
  {
    usuarioReporta: "Ana López",
    fecha: "03/10/2020",
    materia: "Accidente",
    demandado: "Falabella",
    local: "Barranquilla 3",
    pais: "Colombia",
    abogadoEncargado: "Pablo Rodriguez",
    resumen:
      "Alessandra Angulo interpone demanda de indemnización por daños y perjuicios hasta por la suma de USD 50,000.00, por accidente sufrido en el local Barranquilla 3: cliente golpeado por caída de producto mal colocado en estante.",
  },
  {
    usuarioReporta: "Ana Lopez",
    fecha: "03/08/2020",
    materia: "Accidente",
    demandado: "Falabella",
    local: "Santiago I",
    pais: "Chile",
    abogadoEncargado: "Pedro Perez",
    resumen:
      "demandante concurrió a la tienda de Falabella Santiago I el 5 de marzo de 2020, donde tuvo una caída producto de un desnivel en el piso del local. Demandante exige el pago de una indemnización de 1500 USD por daño moral, además del reembolso de los gastos médicos asociados a su accidente, que ascienden a 600 USD. ",
  },
  {
    usuarioReporta: "Pedro Alvarado",
    fecha: "22/05/2020",
    materia: "Despacho de producto",
    demandado: "Falabella",
    local: "Santiago II",
    pais: "Chile",
    abogadoEncargado: "Pedro Perez",
    resumen:
      "Demandante compró un producto en el local de Falabella Santiago II con despacho a domicilio el día 10 de enero de 2020, pero nunca lo recibió. Demandante está solicitando la entrega de su producto y una indemnización de 300 USD por concepto de daño moral",
  },
  {
    usuarioReporta: "Carla Espinoza",
    fecha: "05/01/2020",
    materia: "Despacho de producto",
    demandado: "Linio",
    local: "Santiago II",
    pais: "Chile",
    abogadoEncargado: "Pedro Perez",
    resumen:
      "Demandante compró producto tecnológico (TV Smart Samsony 80’) y recibió monitor de bebé marca SonySam de 8.0’. Solicita entrega de producto o indemnización de USD 3.000",
  },
  {
    usuarioReporta: "Carla Espinoza",
    fecha: "06/08/2020",
    materia: "Estacionamiento",
    demandado: "Mall Plaza",
    local: "Bogota I",
    pais: "Colombia",
    abogadoEncargado: "Pedro Perez",
    resumen:
      "Cliente choca automóvil contra el techo del estacionamiento debido a que la señal de altura máxima era ilegible y no habían medidas de prevención",
    monto: "USD 1.000",
  },
  {
    usuarioReporta: "Pedro Alvarado",
    fecha: "12/09/2020",
    materia: "Despacho Producto",
    demandado: "Linio",
    local: "Concepción I",
    pais: "Chile",
    abogadoEncargado: "Pablo Rodriguez",
    resumen:
      "Cliente compró chaqueta de cuero marca umbrale y no ha recibido el producto. Fecha máxima de despacho 08/08/2020",
    monto: "USD 120",
  },
  {
    usuarioReporta: "Ana Lopez",
    fecha: "29/06/2020",
    materia: "Accidente",
    demandado: "Tottus",
    local: "Barranquilla I",
    pais: "Colombia",
    abogadoEncargado: "Pedro Perez",
    resumen:
      "Demanda de indemnización de perjuicios por accidente producto de líquidos derramados y no limpiados en pasillo de alcoholes ",
    monto: "USD 200",
  },
  {
    usuarioReporta: "Carla Espinoza",
    fecha: "29/07/2020",
    materia: "Publicidad Engañosa",
    demandado: "Falabella",
    local: "Santiago II",
    pais: "Chile",
    abogadoEncargado: "Pedro Perez",
    resumen:
      "Cliente compra producto walkie talkie para poder comunicarse con hijos desde distintas habitaciones, según se muestra en publicidad TV. Walkie Talkie no emiten señal que pueda atravesar paredes",
    monto: "USD 300",
  },
  {
    usuarioReporta: "Carla Espinoza",
    fecha: "29/07/2020",
    materia: "Publicidad Engañosa",
    demandado: "Falabella",
    local: "Santiago II",
    pais: "Chile",
    abogadoEncargado: "Pedro Perez",
    resumen:
      "Demandante compró un computador Macbook air y recibió una piedra. Solicita entrega de producto o indemnización",
    monto: "USD 300",
  },
  {
    usuarioReporta: "Carla Espinoza",
    fecha: "29/07/2020",
    materia: "Publicidad Engañosa",
    demandado: "Falabella",
    local: "Santiago II",
    pais: "Chile",
    abogadoEncargado: "Pedro Perez",
    resumen:
      "Demandante compró un computador Macbook air y recibió una piedra. Solicita entrega de producto o indemnización",
    monto: "USD 300",
  },
];

export { listaDemandas, listaReclamos };
