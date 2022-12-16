import Express from "express";
const app = Express();
const puerto = 8071;
app.use(Express.json());
const timeout = 30000;
let nro = 0;
let envio = '{"method": "payin","transaction_id": "0X1234","user_id": "3536","amount": "10","currency": "USD","notas": "Gracias","date": "2022-07-20 23:36","payin": "3536","hash": "eb6c9fa9ca021704c3ccc27abc42346a","data": "Se ha procesado con Exito","info": "Usuario: mostasa Saldo: $1,149.93","reference": "350522","status": "200"}';
const datos = JSON.parse(envio);
app.post("/gecko/api/payall/payin/:user/hash/:token", (request, response) =>
{
    response.setHeader('content-type', 'application/json');
    console.log("<<<<<Nueva Peticion:>>>>>" + (nro++))
    console.log(request.body)
    console.log("<<<<<Fin Peticion>>>>>" + (nro))
    response.status(200).json(datos)
})
app.listen(puerto, () => console.log("Escuchando en el puerto: "+ puerto))
