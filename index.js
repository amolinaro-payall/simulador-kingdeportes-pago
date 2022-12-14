import Express from "express";
const app = Express();
const puerto = 8071;
app.use(Express.json());
const timeout = 30000;
let nro = 0;
app.post("/gecko/api/payall/payin/", (request, response) =>
{
    console.log("<<<<<Nueva Peticion:>>>>>" + (nro++))
    console.log(request.body)
    console.log("<<<<<Fin Peticion>>>>>" + (nro))
    
    if(request.body)
    {
        response.status(200).send(
            {
                "method": "payin",
                "transaction_id": "0X1234",
                "user_id": "3536",
                "amount": "10",
                "currency": "USD",
                "notas": "Gracias",
                "date": "2022-07-20 23:36",
                "payin": "3536",
                "hash": "eb6c9fa9ca021704c3ccc27abc42346a",
                "data": "Se ha procesado con Exito",
                "info": "Usuario: mostasa Saldo: $1,149.93",
                "reference": "350522",
                "status": "200"
              }
        )
    }else
    {
        response.status(200).send(
            {
                "method": "payin",
                "transaction_id": "0X1234",
                "user_id": "3536",
                "amount": "10",
                "currency": "USD",
                "notas": "Gracias",
                "date": "2022-07-20 23:36",
                "payin": "3536",
                "hash": "eb6c9fa9ca021704c3ccc27abc42346a",
                "data": "Se ha procesado con Exito",
                "info": "Usuario: mostasa Saldo: $1,149.93",
                "reference": "350522",
                "status": "200"
              }
        )
    }
})
app.listen(puerto, () => console.log("Escuchando en el puerto: "+ puerto))