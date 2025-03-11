
process.loadEnvFile() //process.loadEnvFile(['./dev.env','./dev2.env'])


var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


const execute = require('./connection');


var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 7700;

//app.use(bodyParser.json());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  
  next();
});






app.get("/",function(req,res){
  
 

	res.sendFile(path + 'index.html');
}); 



app.get("/login",function(req,res){
  res.redirect('/');
}); 



// clientes

app.post("/insert_cliente",function(req,res){

  const {nombre,telefono,nacimiento,fecha} = req.body;

  let qry = `
    INSERT INTO GYM_CLIENTES (NOMCLIE,TELCLIE,FECHA_NACIMIENTO,FECHA_INICIO) 
    SELECT '${nombre}' AS NOMCLIE,'${telefono}' AS TELCLIE,'${nacimiento}' AS FECHA_NACIMIENTO,'${fecha}' AS FECHA_INICIO; 
  `;

  execute.QueryToken(res,qry,'')

});

app.post("/select_clientes",function(req,res){

  //const {} = req.body;

  let qry = `
    SELECT CODCLIE, NOMCLIE,TELCLIE,FECHA_NACIMIENTO,FECHA_INICIO 
    FROM GYM_CLIENTES
    ORDER BY NOMCLIE; 
  `;

  execute.QueryToken(res,qry,'')

});  

app.post("/delete_cliente",function(req,res){

    const {codclie} = req.body;

    let qry = `DELETE FROM GYM_CLIENTES WHERE CODCLIE=${codclie};`;



    execute.QueryToken(res,qry,'')

});


//clientes

//pagos

app.post("/insert_pago",function(req,res){

  const {codclie,codmesanio,fecha,importe} = req.body;

  let qry = `
    INSERT INTO GYM_PAGOS (CODCLIE,CODMESANIO,FECHA,IMPORTE) 
      SELECT ${codclie} AS CODCLIE,'${codmesanio}' AS CODMESANIO,
      '${fecha}' AS FECHA, ${importe} AS IMPORTE; 
  `;

  console.log(qry)

  execute.QueryToken(res,qry,'')

});

app.post("/select_pagos",function(req,res){

  const {fi,ff} = req.body;

  let qry = `
          SELECT GYM_PAGOS.ID, 
            GYM_PAGOS.CODCLIE, 
            GYM_CLIENTES.NOMCLIE, 
            GYM_PAGOS.CODMESANIO, 
            GYM_PAGOS.FECHA, 
            GYM_PAGOS.IMPORTE
          FROM GYM_PAGOS LEFT OUTER JOIN
            GYM_CLIENTES ON GYM_PAGOS.CODCLIE = GYM_CLIENTES.CODCLIE
          WHERE (GYM_PAGOS.FECHA BETWEEN '${fi}' AND '${ff}')
          ORDER BY GYM_PAGOS.FECHA; 
  `;

  execute.QueryToken(res,qry,'')

});


app.post("/delete_pago",function(req,res){

  const {idpago} = req.body;

  let qry = `DELETE FROM GYM_PAGOS WHERE ID=${idpago};`;



  execute.QueryToken(res,qry,'')

});



app.post("/select_pagos_pendientes",function(req,res){

  const {mes,anio} = req.body;

  let qry = `
        SELECT CODCLIE, NOMCLIE, TELCLIE, FECHA, CODMESANIO, IMPORTE
        FROM     view_pagos
        WHERE  (IMPORTE = 0) 
        AND (MES = ${mes}) AND (ANIO = ${anio})
        ORDER BY NOMCLIE
  `;

  execute.QueryToken(res,qry,'')

});

//pagos





app.use("/",router);

app.use("*",function(req,res){
  res.redirect('/');
  //res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});




// SOCKET HANDLER
io.on('connection', function(socket){

      socket.on('MODO_SAT', (clave)=>{
        execute.Query_system(`UPDATE SYSTEM_CONFIG SET ACTIVO='SI' WHERE CODIGO='MODO_SAT';`);
        io.emit('MODO_SAT', clave);

      });
  
      socket.on('notificacion', (tipo,msn)=>{
        io.emit('notificacion', tipo, msn);
      });

      socket.on('nueva_cotizacion', (tipo,msn)=>{
        io.emit('nueva_cotizacion', tipo, msn);
      });

      
  
});


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

