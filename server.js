
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
    SELECT NOMCLIE,TELCLIE,FECHA_NACIMIENTO,FECHA_INICIO FROM GYM_CLIENTES; 
  `;

  execute.QueryToken(res,qry,'')

});  







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

