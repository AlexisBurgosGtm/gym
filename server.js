
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



app.get("/despacho_finalizado",function(req,res){

  const {empnit,coddoc,correlativo} = req.query;

  io.emit('fin_despacho', empnit,coddoc,correlativo);

  res.send('ok')

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

