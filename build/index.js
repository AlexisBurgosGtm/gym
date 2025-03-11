function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.menu()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.clientes_listado() + view.modal_cliente_nuevo()}    
                            
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.pagos_listado() }
                        </div>   
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            ${view.pendientes_listado() }
                        </div>  
                        <div class="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs oculto hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cinco" data-toggle="tab" href="#cinco" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               ${view.modal_pago_nuevo()}
            `
        },
        menu:()=>{
            return `
             <div class="contacts row">

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                      
                            <div class="contacts__item" id="btnSuscritos">
                                <a href="#" class="contacts__img">
                                    <img src="./favicon.png" alt="">
                                </a>

                                <div class="contacts__info">
                                    <strong>GymBros</strong>
                                    <small></small>
                                </div>

                                <button class="contacts__btn"></button>
                            </div>

                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        
                            <div class="contacts__item" id="btnPagos">
                                <a href="#" class="contacts__img">
                                    <img src="./favicon.png" alt="">
                                </a>

                                <div class="contacts__info">
                                    <strong>Lista Pagos</strong>
                                    <small></small>
                                </div>

                                <button class="contacts__btn"></button>
                            </div>
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                      
                            <div class="contacts__item" id="btnPendientes">
                                <a href="#" class="contacts__img">
                                    <img src="./favicon.png" alt="">
                                </a>

                                <div class="contacts__info">
                                    <strong>Pagos Pendientes</strong>
                                    <small></small>
                                </div>

                                <button class="contacts__btn"></button>
                            </div>

                    </div>

                    
                </div>

            `
        },
        clientes_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    
                    <h2>Listado de GymBros</h2>
                    <br>
                    <label class="negrita text-danger" id="lbTotalClientes"></label>
                    <br>

                    <div class="table-responsive col-12">
                        <div class="form-group">
                            <input type="text" class="form-control text-info" placeholder="Escriba para buscar..." id="txtClienteBuscar" oninput="F.FiltrarTabla('tblClientes','txtClienteBuscar')">
                        </div>
                        <br>
                        <table class="table table-responsive table-hover col-12" id="tblClientes">
                            <thead class="text-warning negrita">
                                <tr>
                                    <td>NOMBRE</td>
                                    <td>TELEFONO</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataClientes">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-secondary btn-circle btn-bottom-l btn-xl mano shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
            </button>

            <button id="btnNuevoCliente" class="btn btn-success btn-circle btn-bottom-r btn-xl mano shadow">
                <i class="zmdi zmdi-plus zmdi-hc-fw"></i>
            </button>

            `
        },
        modal_cliente_nuevo:()=>{
            return `
              <div id="modal_cliente" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                       
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">

                                    <h3>Datos del GymBro</h3>

                                    <div class="form-group">
                                        <label class="negrita text-info">Nombre del GymBro</label>
                                        <input type="text" class="form-control" id="txtClienteNombre">
                                    </div>
                                    <div class="form-group">
                                        <label class="negrita text-info">Fecha Nacimiento</label>
                                        <input type="date" class="form-control" id="txtClienteFecha">
                                    </div>
                                    <div class="form-group">
                                        <label class="negrita text-info">Telefono</label>
                                        <input type="number" class="form-control" id="txtClienteTelefono">
                                    </div>

                                </div>
                            </div>

                                
                            <div class="row">

                                <div class="col-6">
                                    <button class="btn btn-danger btn-circle btn-xl mano shadow" data-dismiss="modal">
                                        <i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
                                    </button>
                                </div>

                                <div class="col-6">
                                    <button class="btn btn-info btn-circle btn-xl mano shadow" id="btnGuardarCliente">
                                        <i class="zmdi zmdi-save zmdi-hc-fw"></i>
                                    </button>
                                </div>

                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        },
        modal_pago_nuevo:()=>{
            return `
              <div id="modal_pago" class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                       
                        <div class="modal-body p-4">
                            
                            <div class="card card-rounded">
                                <div class="card-body p-2">

                                    <h3>Nuevo pago</h3>
                                    <h5 class="text-warning negrita" id="lbPagoNomclie"><h5>
                                    <br>
                                    <div class="form-group">
                                        <label class="negrita text-info">Mes a Pagar</label>
                                        <div class="input-group">
                                            <select class="form-control negrita text-warning" id="cmbPagoMes">
                                                    <option value="">ENERO</option>
                                            </select>
                                            <select class="form-control negrita text-warning" id="cmbPagoAnio">
                                                <option value="2025">2025</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-info">Fecha Pago</label>
                                        <input type="date" class="form-control" id="txtPagoFecha">
                                    </div>

                                    <div class="form-group">
                                        <label class="negrita text-info">Importe</label>
                                        <input type="number" class="form-control negrita text-warning f-grande" id="txtPagoImporte">
                                    </div>

                                </div>
                            </div>

                                
                            <div class="row">

                                <div class="col-6">
                                    <button class="btn btn-danger btn-circle btn-xl mano shadow" data-dismiss="modal">
                                        <i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
                                    </button>
                                </div>

                                <div class="col-6">
                                    <button class="btn btn-info btn-circle btn-xl mano shadow" id="btnGuardarPago">
                                        <i class="zmdi zmdi-save zmdi-hc-fw"></i>
                                    </button>
                                </div>

                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>
            `
        },
        pagos_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">

                    <h2>Pagos realizados</h2>

                    <div class="table-responsive col-12">

                        <div class="row">
                            <div class="col-6">
                                
                                <div class="form-group">
                                    <label>Fecha Inicial</label>
                                    <input type="date" class="form-control negrita text-success" id="txtPagoFinicial">
                                </div>

                            </div>
                            <div class="col-6">

                                <div class="form-group">
                                    <label>Fecha Final</label>
                                    <input type="date" class="form-control negrita text-success" id="txtPagoFfinal">
                                </div>

                            </div>
                        </div>
                        
                        <br>

                        <table class="table table-responsive table-bordered col-12" id="tblPagos">
                            <thead class="negrita">
                                <tr>
                                    <td>GYMBRO</td>
                                    <td>MES</td>
                                    <td>FECHA</td>
                                    <td>IMPORTE</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataPagos">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-secondary btn-circle btn-bottom-l btn-xl mano shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
            </button>

          
            `
        },
        pendientes_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    
                    <h2>Pagos Pendientes</h2>
                    <br>
                    <label class="negrita text-danger" id=""></label>
                    <br>

                    <div class="table-responsive col-12">
                        <div class="form-group">
                            <label>Seleccione un Mes y Año</label>
                            <div class="input-group">
                                <select class="form-control text-warning" id="cmbPMes">
                                </select>
                                <select class="form-control text-warning" id="cmbPAnio">
                                </select>
                            </div>
                        </div>
                        <br>
                        <h3 id="lbTotalPendientes"></h3>
                        <table class="table table-responsive table-hover col-12" id="">
                            <thead class="text-danger negrita">
                                <tr>
                                    <td>NOMBRE</td>
                                    <td>TELEFONO</td>
                                    <td>MES</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataPendientes">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-secondary btn-circle btn-bottom-l btn-xl mano shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="zmdi zmdi-arrow-left zmdi-hc-fw"></i>
            </button>
            `
        }
        
    }

    root.innerHTML = view.body();

};

function addListeners(){

    F.slideAnimationTabs();

    document.getElementById('btnSuscritos').addEventListener('click',()=>{

        document.getElementById('tab-dos').click();
        
        get_tbl_clientes();

    })

    document.getElementById('btnPagos').addEventListener('click',()=>{

        document.getElementById('tab-tres').click();
        tbl_pagos();  
    })

    document.getElementById('btnPendientes').addEventListener('click',()=>{

        document.getElementById('tab-cuatro').click();
        
        tbl_pagos_pendientes();

    })




    listeners_clientes();

    listeners_pagos();
    
};

function initView(){

    getView();
    addListeners();

};

initView();





function listeners_clientes(){

    document.getElementById('txtClienteFecha').value = F.getFecha();


    document.getElementById('btnNuevoCliente').addEventListener('click',()=>{
        
        clean_data_cliente();

        $("#modal_cliente").modal('show');

    })

    document.getElementById('txtClienteNombre').addEventListener('input',()=>{
        document.getElementById('txtClienteNombre').value = document.getElementById('txtClienteNombre').value.toUpperCase();
    })

    let btnGuardarCliente = document.getElementById('btnGuardarCliente');
    btnGuardarCliente.addEventListener('click',()=>{

        let nombre = document.getElementById('txtClienteNombre').value || '';
        let telefono = document.getElementById('txtClienteTelefono').value || '';
        let nacimiento= document.getElementById('txtClienteFecha').value

        if(nombre==''){F.AvisoError('Indique el nombre del Gymbro');return;}


        F.Confirmacion('Esta seguro que quiere CREAR este nuevo GYMBRO?')
        .then((value)=>{
            if(value==true){


                btnGuardarCliente.disabled = true;
                btnGuardarCliente.innerHTML = `<i class="zmdi zmdi-save zmdi-hc-fw spin"></i>`;

                insert_cliente(nombre,telefono,nacimiento)
                .then(()=>{

                    F.Aviso('Gymbro creado exitosamente!!');
                  

                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = `<i class="zmdi zmdi-save zmdi-hc-fw"></i>`;

                    $("#modal_cliente").modal('hide');

                    F.hablar('Gymbro creado exitosamente');


                    get_tbl_clientes();

                })
                .catch((error)=>{
                    console.log(error);

                    F.AvisoError('No se pudo crear este Gymbro');

                    btnGuardarCliente.disabled = false;
                    btnGuardarCliente.innerHTML = `<i class="zmdi zmdi-save zmdi-hc-fw"></i>`;
                })


            }
        })

    });



    

};

function clean_data_cliente(){
    document.getElementById('txtClienteNombre').value = '';
    document.getElementById('txtClienteTelefono').value = '';
    document.getElementById('txtClienteFecha').value = F.getFecha();
}

function insert_cliente(nombre,telefono,fecha){

    return new Promise((resolve,reject)=>{

        axios.post('/insert_cliente', {nombre:nombre,telefono:telefono,nacimiento:fecha,fecha:F.getFecha()})
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    }) 

};


function data_clientes(){

    return new Promise((resolve,reject)=>{

        axios.post('/select_clientes')
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    }) 

};


function get_tbl_clientes(){


    let container = document.getElementById('tblDataClientes');
    container.innerHTML = GlobalLoader;

    let str = '';
    let contador = 0;

    data_clientes()
    .then((data)=>{
        data.recordset.map((r)=>{
            contador +=1;
            let btnE = `btnE${r.CODCLIE}`;
            str += `
            <tr>
                <td>${r.NOMCLIE}</td>
                <td>${r.TELCLIE}</td>
                <td>
                    <button class="btn btn-info btn-circle btn-md mano" 
                    onclick="get_pago('${r.CODCLIE}','${r.NOMCLIE}')">
                            <i class="zmdi zmdi-fire zmdi-hc-fw"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-danger btn-circle btn-md mano"
                    onclick="delete_cliente('${r.CODCLIE}','${btnE}')" id='${btnE}'>
                            <i class="zmdi zmdi-delete zmdi-hc-fw"></i>
                    </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
        document.getElementById('lbTotalClientes').innerText = `Total Gymbros ${contador}`;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos....';
        document.getElementById('lbTotalClientes').innerText = '';
    })

};



function data_delete_cliente(codclie){

    return new Promise((resolve,reject)=>{

        axios.post('/delete_cliente',{codclie:codclie})
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    }) 

};

function delete_cliente(codclie,idbtn){


    let btn = document.getElementById(idbtn);

   


    F.Confirmacion('¿Está seguro que desea ELIMINAR a este GYMBRO?')
    .then((value)=>{
        if(value==true){

            btn.disabled = true;
            
            data_delete_cliente(codclie)
            .then(()=>{
                F.Aviso('Gymbro eliminado exitosamente!!');
                get_tbl_clientes();
            })
            .catch(()=>{
                btn.disabled = false;
                F.AvisoError('No se pudo ELIMINAR');
            })


        }
    })


};








function listeners_pagos(){
    

    document.getElementById('txtPagoFecha').value = F.getFecha();


    document.getElementById('txtPagoFinicial').value = F.getFecha();
    document.getElementById('txtPagoFfinal').value = F.getFecha();



    document.getElementById('txtPagoImporte').value = config_pago_suscripcion;


    document.getElementById('cmbPagoMes').innerHTML = F.ComboMeses();
    document.getElementById('cmbPagoMes').value = F.get_mes_curso();

    document.getElementById('cmbPagoAnio').innerHTML = F.ComboAnio();
    document.getElementById('cmbPagoAnio').value = F.get_anio_curso();




    document.getElementById('txtPagoFinicial').addEventListener('change',()=>{
        tbl_pagos();
    })

    document.getElementById('txtPagoFfinal').addEventListener('change',()=>{
        tbl_pagos();
    })


    let btnGuardarPago = document.getElementById('btnGuardarPago');
    btnGuardarPago.addEventListener('click',()=>{


        F.Confirmacion('¿Está seguro que desea guardar este nuevo pago?')
        .then((value)=>{
            if(value==true){

                    let codclie = selected_codclie;
                    let codmesanio =`${document.getElementById('cmbPagoMes').value}-${document.getElementById('cmbPagoAnio').value}`;
                    let fecha = F.devuelveFecha('txtPagoFecha');  
                    let importe = document.getElementById('txtPagoImporte').value;

                    btnGuardarPago.disabled = true;
                    btnGuardarPago.innerHTML = `<i class="zmdi zmdi-save zmdi-hc-fw"></i>Cargando...`;

                    insert_pago(selected_codclie,codmesanio,fecha,importe)
                    .then(()=>{
                        
                        F.Aviso('Pago registrado exitosamente!!');
                        
                        $("#modal_pago").modal('hide');

                        tbl_pagos();
                        tbl_pagos_pendientes();
                        
                    })
                    .catch(()=>{
                        F.AvisoError('No se pudo registrar el pago');
                        btnGuardarPago.disabled = false;
                        btnGuardarPago.innerHTML = `<i class="zmdi zmdi-save zmdi-hc-fw"></i>`;
                    })

            }
        })

        

    });



    let cmbPMes = document.getElementById('cmbPMes');
    let cmbPAnio = document.getElementById('cmbPAnio');


    cmbPMes.innerHTML = F.ComboMeses(); cmbPMes.value = F.get_mes_curso();
    cmbPAnio.innerHTML = F.ComboAnio(); cmbPAnio.value = F.get_anio_curso();


    cmbPMes.addEventListener('change',()=>{

        tbl_pagos_pendientes();

    })

    cmbPAnio.addEventListener('change',()=>{

        tbl_pagos_pendientes();
        
    })

    


  

};

function get_pago(codclie,nomclie){


    selected_codclie = codclie;
    document.getElementById('lbPagoNomclie').innerText = nomclie;

     $("#modal_pago").modal('show');


}


function insert_pago(codclie,codmesanio,fecha,importe){

    return new Promise((resolve,reject)=>{

        axios.post('/insert_pago', {
                                codclie:codclie,
                                codmesanio:codmesanio,
                                fecha:fecha,
                                importe:importe
                                    })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    }) 

};


function data_pagos(fechainicial,fechafinal){

    return new Promise((resolve,reject)=>{

        axios.post('/select_pagos',{fi:fechainicial,ff:fechafinal})
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    }) 

};

function tbl_pagos(){


    let fi = F.devuelveFecha('txtPagoFinicial');
    let ff = F.devuelveFecha('txtPagoFfinal');

    let container = document.getElementById('tblDataPagos');
    container.innerHTML = GlobalLoader;

    let str = '';

    data_pagos(fi,ff)
    .then((data)=>{
        data.recordset.map((r)=>{
            let btnEP = `btnEP${r.ID}`;
            str += `
            <tr>
                <td>${r.NOMCLIE}</td>
                <td>${r.CODMESANIO}</td>
                <td>${F.convertDateNormal(r.FECHA)}</td>
                <td>${F.setMoneda(r.IMPORTE,'Q')}</td>
                <td>
                    <button class="btn btn-danger btn-circle btn-md mano"
                    onclick="delete_pago('${r.ID}','${btnEP}')">
                            <i class="zmdi zmdi-delete zmdi-hc-fw"></i>
                    </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos...';
    })





};


function data_delete_pago(idpago){

    return new Promise((resolve,reject)=>{

        axios.post('/delete_pago',{idpago:idpago})
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    }) 

};

function delete_pago(idpago,idbtn){

    let btn = document.getElementById(idbtn);



    F.Confirmacion('¿Está seguro que desea ELIMINAR a este PAGO?')
    .then((value)=>{
        if(value==true){
            btn.disabled = true;

            data_delete_pago(idpago)
            .then(()=>{
                F.Aviso('Pago eliminado exitosamente!!');
                tbl_pagos();
            })
            .catch(()=>{
                btn.disabled = false;
                F.AvisoError('No se pudo ELIMINAR');
            })


        }
    })


};




function data_pagos_pendientes(mes,anio){

    return new Promise((resolve,reject)=>{

        axios.post('/select_pagos_pendientes',{mes:mes,anio:anio})
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(data.toString()=="error"){
                    reject();
                }else{
                    if(Number(data.rowsAffected[0])>0){
                        resolve(data);             
                    }else{
                        reject();
                    } 
                }       
            }else{
                reject();
            }                   
        }, (error) => {
            reject();
        });
    }) 

};

function tbl_pagos_pendientes(){

    
    let mes = document.getElementById('cmbPMes').value;
    let anio = document.getElementById('cmbPAnio').value;


    let container = document.getElementById('tblDataPendientes');
    container.innerHTML = GlobalLoader;

    let contador = 0;

    data_pagos_pendientes(mes,anio)
    .then((data)=>{

        let str = '';
        data.recordset.map((r)=>{
            contador += 1;
            str += `
            <tr>
                <td>${r.NOMCLIE}</td>
                <td>${r.TELCLIE}</td>
                <td>${r.CODMESANIO}</td>
                <td>
                 <button class="btn btn-info btn-circle btn-md mano" 
                    onclick="get_pago('${r.CODCLIE}','${r.NOMCLIE}')">
                            <i class="zmdi zmdi-fire zmdi-hc-fw"></i>
                    </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
        document.getElementById('lbTotalPendientes').innerText = `Pendientes: ${contador}`;
    })
    .catch(()=>{

        container.innerHTML = 'No se cargaron datos.....';
        document.getElementById('lbTotalPendientes').innerText = '';
    })

};