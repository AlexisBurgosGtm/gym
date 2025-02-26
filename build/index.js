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
                            ${view.pagos_listado() + view.modal_pago_nuevo()}
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
                    </ul>
                    
                </div>
               
            `
        },
        menu:()=>{
            return `
             <div class="contacts row">

                    <div class="col-6">
                      
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

                    <div class="col-6">
                        
                            <div class="contacts__item" id="btnPagos">
                                <a href="#" class="contacts__img">
                                    <img src="./favicon.png" alt="">
                                </a>

                                <div class="contacts__info">
                                    <strong>Pagos</strong>
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

                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12" id="tblClientes">
                            <thead class="bg-base text-white">
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
        pagos_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">

                    <h2>Pagos Pendientes</h2>

                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-bordered col-12" id="tblPagos">
                            <thead class="">
                                <tr>
                                    <td>GYMBRO</td>
                                    <td>MES</td>
                                    <td>IMPORTE</td>
                                    <td></td>
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

            <button class="btn btn-success btn-circle btn-bottom-r btn-xl mano shadow" id="btnPagoNuevo">
                <i class="zmdi zmdi-plus zmdi-hc-fw"></i>
            </button>
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

                                    <div class="form-group">
                                        <label class="negrita text-info">Mes a Pagar</label>
                                        <div class="input-group">
                                            <select class="form-control negrita text-warning">
                                                    <option value="">ENERO</option>
                                            </select>
                                            <select class="form-control negrita text-warning">
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
    }

    root.innerHTML = view.body();

};

function addListeners(){

    F.slideAnimationTabs();

    document.getElementById('btnSuscritos').addEventListener('click',()=>{

        document.getElementById('tab-dos').click();

    })

    document.getElementById('btnPagos').addEventListener('click',()=>{

        document.getElementById('tab-tres').click();
        
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



    
    get_tbl_clientes();

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


    data_clientes()
    .then((data)=>{
        data.recordset.map((r)=>{
            str += `
            <tr>
                <td>${r.NOMCLIE}</td>
                <td>${r.TELCLIE}</td>
                <td></td>
                <td>
                    <button class="btn btn-danger btn-circle btn-md mano">
                            <i class="zmdi zmdi-delete zmdi-hc-fw"></i>
                    </button>
                </td>
            </tr>
            `
        })
        container.innerHTML = str;
    })
    .catch(()=>{
        container.innerHTML = 'No se cargaron datos....';
    })

};









function listeners_pagos(){
    

    document.getElementById('txtPagoFecha').value = F.getFecha();

    document.getElementById('txtPagoImporte').value = config_pago_suscripcion;



    document.getElementById('btnPagoNuevo').addEventListener('click',()=>{
        $("#modal_pago").modal('show');

    })


};