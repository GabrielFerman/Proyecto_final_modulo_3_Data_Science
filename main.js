class HashTable{
    constructor(){
        this.table = new Array(127);//Inicializar la tabla con un valor fijo
        this.size = 0;//Inicializar el conteo del tamaño
    }
    //Escribir una funcion hash que reciba un valor y lo convienta en un indice
    _hash(key){
        let _hash = 0;
        for(let i=0; i < key.length; i++){
            _hash = _hash + key.charCodeAt(i);
        }
        return _hash % 127;
    }
    //Crear metodo set llave y valor y usara funcion hash
    set (key, value){
        const index = this._hash(key);
        if (this.table[index]){
            this.table[index].push([key,value]);
        } else {
            this.table[index] = []
            this.table[index].push([key,value]);
        }
        this.size++;
    }
    //Crear el metodo get que recibira la llave y devolvera el valor almacenado
    get_value(key){
        const index = this._hash(key);
        if (this.table[index]){
            for(let i = 0; i < this.table[index].length; i++){
                //Encontro la llave valor en el arreglo
                if ( this.table[index][i][0] === key){
                    return this.table[index][i][1];
                }
            }
        } 
        return undefined;
    }
    //Crear metodo para eliminar un valor recibiendo la llave como parametro
    remove (key){
        const index = this._hash(key);
        if(this.table[index] && this.table[index].length){
            for(let i = 0; i < this.table[index].length; i++){
                //Encontro la llave valor en el arreglo
                if ( this.table[index][i][0] === key){
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }    
        } else {
            return false;
        }
    }
}

let newtable = new HashTable();
if(JSON.parse(localStorage.getItem("newtable")) != null){
    valors = JSON.parse(localStorage.getItem("newtable"));
    newtable.table = valors.table;
    newtable.size = valors.size;
}
let maestro = {
    nombre: null,
    apellido: null,
    edad: null,
    materia_1: null,
    materia_2: null,
    materia_3: null,
    materia_4: null,
    materia_5: null,
    materia_6: null,
    password: null,
}

var admin = JSON.parse(localStorage.getItem("admin"))

function fill_admin(){
    if(admin == null){
        admin = {
            nombre: null,
            apellido: null,
            edad: null,
            password: null,
        }
        alert("Bienvenido a la plataforma lombrar");
        alert("Empezaremos el sencillo proceso de personalizar la plataforma");
        alert("Por favor escribe los datos que se te piden para definir al administrador de la plataforma");
        admin.nombre = prompt("Escribe el o los nombres del administrador de la plataforma");
        admin.apellido = prompt("Escribe los apellidos del administrador de la plataforma");
        admin.edad = prompt("Escribe la edad del administradod de la plataforma");
        admin.password = prompt("Escribe el password que usara el administrador de la plataforma");
        alert("Ya puedes comenzar a usar la plataforma gracias");
        localStorage.setItem("admin",JSON.stringify(admin));
    }
}
function enter_platform(){
    fill_admin();
    let password = prompt("Escribe el password para poder ingresar a la plataforma")
    if(password == admin.password){
        window.location.href="index_4.html";
    } else {
        alert("Usted no esta autorizado para ingresar a la plataforma");
    }
}

let materias = JSON.parse(localStorage.getItem("materias"));
if(materias == null){

    materias = {
        español: [],
        matematicas: [],
        historia: [],
        civica_y_etica: [],
        biologia: [],
        ingles: [],
        frances: [],
        educacion_fisica: [],
        arte: [],
        quimica: [],
        fisica: [],
    }
}
let esp = JSON.parse(localStorage.getItem("esp"));
if(esp == null){
    esp =[];
}
let mat = JSON.parse(localStorage.getItem("mat"));
if(mat == null){
    mat = [];
}
let his = JSON.parse(localStorage.getItem("his"));
if(his == null){
    his = [];
}
let civ_y_eti = JSON.parse(localStorage.getItem("civ_y_eti"));
if(civ_y_eti == null){
    civ_y_eti = [];
}
let bio = JSON.parse(localStorage.getItem("bio"));
if(bio == null){
    bio = [];
} 
let ing = JSON.parse(localStorage.getItem("ing"));
if(ing == null){
    ing = [];
}
let fran = JSON.parse(localStorage.getItem("fran"));
if(fran == null){
    fran = [];
}
let edu_fis = JSON.parse(localStorage.getItem("edu_fis"));
if(edu_fis == null){
    edu_fis = [];
} 
let art = JSON.parse(localStorage.getItem("art"));
if(art == null){
    art = [];
}
let quim = JSON.parse(localStorage.getItem("quim"));
if(quim == null){
    quim = [];
}
let fis = JSON.parse(localStorage.getItem("fis"));
if(fis == null){
    fis = [];
}

function fill_table(){
    let valor = {
        nombre: null,
        apellido: null,
        edad: null,
        tutor: null,
        telefono: null,
        direccion: null,
        alergias: null,
        password: null,
        calificaciones: {
            español: 0,
            matematicas: 0,
            historia: 0,
            civica_y_etica: 0,
            biologia: 0,
            ingles: 0,
            frances: 0,
            educacion_fisica: 0,
            arte: 0,
            quimica: 0,
            fisica: 0,
         }   
    }
    valor.nombre = document.getElementById("nombre_alumno").value;
    valor.apellido = document.getElementById("apellido_alumno").value;
    valor.edad = parseInt(document.getElementById("edad_alumno").value,10);
    valor.tutor = document.getElementById("tutor_alumno").value;
    valor.telefono = document.getElementById("telefono_alumno").value;
    valor.direccion = document.getElementById("direccion_alumno").value;
    valor.alergias = document.getElementById("alergias_alumno").value;
    valor.password = document.getElementById("password_alumno").value;
    document.getElementById("nombre_alumno").value = "";
    document.getElementById("apellido_alumno").value = "";
    document.getElementById("edad_alumno").value = "";
    document.getElementById("tutor_alumno").value = "";
    document.getElementById("telefono_alumno").value = "";
    document.getElementById("direccion_alumno").value = "";
    document.getElementById("alergias_alumno").value = "";
    document.getElementById("password_alumno").value = "";
    let key = valor.password;
    newtable.set(key,valor);
    alert("El alumno se dio de alta correctamente");
    localStorage.setItem("newtable",JSON.stringify(newtable));
}

function get_value(){
    let key = document.getElementById("consulta_input_password_alumno").value;
    let valor = newtable.get_value(key);
    if(valor != undefined){
        let name = document.getElementById("consulta_nombre_alumno");
        name.innerHTML = valor.nombre;
        let last_name = document.getElementById("consulta_apellido_alumno");
        last_name.innerHTML = valor.apellido;
        let age = document.getElementById("consulta_edad_alumno");
        age.innerHTML = valor.edad;
        let charge = document.getElementById("consulta_tutor_alumno");
        charge.innerHTML = valor.tutor;
        let phone = document.getElementById("consulta_telefono_alumno");
        phone.innerHTML = valor.telefono;
        let address = document.getElementById("consulta_direccion_alumno");
        address.innerHTML = valor.direccion;
        let alergics = document.getElementById("consulta_alergias_alumno");
        alergics.innerHTML = valor.alergias
        //document.getElementById("consulta_input_apellido_alumno").value = "";
    } else {
        alert("El alumno no esta en la base de datos favor de registrarlo");
        document.getElementById("consulta_input_password_alumno").value = "";
        let name = document.getElementById("consulta_nombre_alumno");
        name.innerHTML = "";
        let last_name = document.getElementById("consulta_apellido_alumno");
        last_name.innerHTML = "";
        let age = document.getElementById("consulta_edad_alumno");
        age.innerHTML = "";
        let charge = document.getElementById("consulta_tutor_alumno");
        charge.innerHTML = "";
        let phone = document.getElementById("consulta_telefono_alumno");
        phone.innerHTML = "";
        let address = document.getElementById("consulta_direccion_alumno");
        address.innerHTML = "";
        let alergics = document.getElementById("consulta_alergias_alumno");
        alergics.innerHTML = "";
    }
}

function modify_nombre(){
    let key = document.getElementById("consulta_input_password_alumno").value;
    let valor = newtable.get_value(key);
    valor.nombre = prompt("Escriba el nuevo nombre que desee");
    let name = document.getElementById("consulta_nombre_alumno");
    name.innerHTML = valor.nombre;
    localStorage.setItem("newtable",JSON.stringify(newtable));
}
function modify_apellido(){
    let key = document.getElementById("consulta_input_password_alumno").value;
    let valor = newtable.get_value(key);
    valor.apellido = prompt("Escriba el nuevo apellido que desee");
    let name = document.getElementById("consulta_apellido_alumno");
    name.innerHTML = valor.apellido;
    localStorage.setItem("newtable",JSON.stringify(newtable));
}
function modify_edad(){
    let key = document.getElementById("consulta_input_password_alumno").value;
    let valor = newtable.get_value(key);
    valor.edad = parseInt(prompt("Escriba la edad que desee"),10);
    let name = document.getElementById("consulta_edad_alumno");
    name.innerHTML = valor.edad;
    localStorage.setItem("newtable",JSON.stringify(newtable));
}
function modify_tutor(){
    let key = document.getElementById("consulta_input_password_alumno").value;
    let valor = newtable.get_value(key);
    valor.tutor = prompt("Escriba el nuevo nombre del tutor que desee");
    let name = document.getElementById("consulta_tutor_alumno");
    name.innerHTML = valor.tutor;
    localStorage.setItem("newtable",JSON.stringify(newtable));
}
function modify_telefono(){
    let key = document.getElementById("consulta_input_password_alumno").value;
    let valor = newtable.get_value(key);
    valor.telefono = prompt("Escriba el nuevo telefono que desee");
    let name = document.getElementById("consulta_telefono_alumno");
    name.innerHTML = valor.telefono;
    localStorage.setItem("newtable",JSON.stringify(newtable));
}
function modify_direccion(){
    let key = document.getElementById("consulta_input_password_alumno").value;
    let valor = newtable.get_value(key);
    valor.direccion = prompt("Escriba la nueva direccion que desee");
    let name = document.getElementById("consulta_direccion_alumno");
    name.innerHTML = valor.direccion;
    localStorage.setItem("newtable",JSON.stringify(newtable));
}
function modify_alergias(){
    let key = document.getElementById("consulta_input_password_alumno").value;
    let valor = newtable.get_value(key);
    valor.alergias = prompt("Escriba el cambio n alergias que desee");
    let name = document.getElementById("consulta_alergias_alumno");
    name.innerHTML = valor.alergias;
    localStorage.setItem("newtable",JSON.stringify(newtable));
}

function get_value_calificaciones(){
    let key = document.getElementById("calificaciones_input_password_alumno").value;
    let valor = newtable.get_value(key);
    if(valor != undefined){
        let nombre = document.getElementById("calificaciones_nombre_alumno");
        nombre.innerHTML = valor.nombre + " " + valor.apellido;
        valor = valor.calificaciones;
        let español = document.getElementById("calificaciones_alumno_español");
        español.innerHTML = valor.español;
        let matematicas = document.getElementById("calificaciones_alumno_matematicas");
        matematicas.innerHTML = valor.matematicas;
        let  historia = document.getElementById("calificaciones_alumno_historia");
        historia.innerHTML = valor.historia;
        let civica_y_etica = document.getElementById("calificaciones_alumno_civica_y_etica");
        civica_y_etica.innerHTML = valor.civica_y_etica;
        let biologia = document.getElementById("calificaciones_alumno_biologia");
        biologia.innerHTML = valor.biologia;
        let ingles = document.getElementById("calificaciones_alumno_ingles");
        ingles.innerHTML = valor.ingles;
        let frances = document.getElementById("calificaciones_alumno_frances");
        frances.innerHTML = valor.frances;
        let educacion_fisica = document.getElementById("calificaciones_alumno_educacion_fisica");
        educacion_fisica.innerHTML = valor.educacion_fisica;
        let arte = document.getElementById("calificaciones_alumno_arte");
        arte.innerHTML = valor.arte;
        let quimica = document.getElementById("calificaciones_alumno_quimica");
        quimica.innerHTML = valor.quimica;
        let fisica = document.getElementById("calificaciones_alumno_fisica");
        fisica.innerHTML = valor.fisica;
        let promedio_ventana = document.getElementById("calificaciones_alumno_promedio");
        promedio_ventana.innerHTML = "";
    } else {
        alert("El alumno no esta en la base de datos favor de registrarlo")
        document.getElementById("calificaciones_input_apellido_alumno").value = "";
        let español = document.getElementById("calificaciones_alumno_español");
        español.innerHTML = "";
        let matematicas = document.getElementById("calificaciones_alumno_matematicas");
        matematicas.innerHTML = "";
        let  historia = document.getElementById("calificaciones_alumno_historia");
        historia.innerHTML = "";
        let civica_y_etica = document.getElementById("calificaciones_alumno_civica_y_etica");
        civica_y_etica.innerHTML = "";
        let biologia = document.getElementById("calificaciones_alumno_biologia");
        biologia.innerHTML = "";
        let ingles = document.getElementById("calificaciones_alumno_ingles");
        ingles.innerHTML = "";
        let frances = document.getElementById("calificaciones_alumno_frances");
        frances.innerHTML = "";
        let educacion_fisica = document.getElementById("calificaciones_alumno_educacion_fisica");
        educacion_fisica.innerHTML = "";
        let arte = document.getElementById("calificaciones_alumno_arte");
        arte.innerHTML = "";
        let quimica = document.getElementById("calificaciones_alumno_quimica");
        quimica.innerHTML = "";
        let fisica = document.getElementById("calificaciones_alumno_fisica");
        fisica.innerHTML = "";
    }
}

function modify_español(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.español = parseInt(prompt("Escriba la calificacion de la materia de Español"),10);
        let español = document.getElementById("calificaciones_alumno_español");
        español.innerHTML = valor.español;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta aurotizado para hacer algun cambio");
    }
}
function modify_matematicas(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.matematicas = parseInt(prompt("Escriba la calificacion de la materia de Matematicas"),10);
        let matematicas = document.getElementById("calificaciones_alumno_matematicas");
        matematicas.innerHTML = valor.matematicas;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function modify_historia(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.historia = parseInt(prompt("Escriba la calificacion de la materia de Historia"),10);
        let historia = document.getElementById("calificaciones_alumno_historia");
        historia.innerHTML = valor.historia;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function modify_civica_y_etica(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.civica_y_etica = parseInt(prompt("Escriba la calificacion de la materia de Civica y Etica"),10);
        let civica_y_etica = document.getElementById("calificaciones_alumno_civica_y_etica");
        civica_y_etica.innerHTML = valor.civica_y_etica;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function modify_biologia(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.biologia = parseInt(prompt("Escriba la calificacion de la materia de Biologia"),10);
        let biologia = document.getElementById("calificaciones_alumno_biologia");
        biologia.innerHTML = valor.biologia;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function modify_ingles(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.ingles = parseInt(prompt("Escriba la calificacion de la materia de Ingles"),10);
        let ingles = document.getElementById("calificaciones_alumno_ingles");
        ingles.innerHTML = valor.ingles;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function modify_frances(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.frances = parseInt(prompt("Escriba la calificacion de la materia de Frances"),10);
        let frances = document.getElementById("calificaciones_alumno_frances");
        frances.innerHTML = valor.frances;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function modify_educacion_fisica(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.educacion_fisica = parseInt(prompt("Escriba la calificacion de la materia de Educacion Fisica"),10);
        let educacion_fisica = document.getElementById("calificaciones_alumno_educacion_fisica");
        educacion_fisica.innerHTML = valor.educacion_fisica;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function modify_arte(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.arte = parseInt(prompt("Escriba la calificacion de la materia de Arte"),10);
        let arte = document.getElementById("calificaciones_alumno_arte");
        arte.innerHTML = valor.arte;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function modify_quimica(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.quimica = parseInt(prompt("Escriba la calificacion de la materia de Quimica"),10);
        let quimica = document.getElementById("calificaciones_alumno_quimica");
        quimica.innerHTML = valor.quimica;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function modify_fisica(){
    let password = prompt("Escriba el password para poder hacer las modificaciones");
    if(password == admin.password){
        let key = document.getElementById("calificaciones_input_password_alumno").value;
        let valor = newtable.get_value(key);
        valor = valor.calificaciones;
        valor.fisica = parseInt(prompt("Escriba la calificacion de la materia de Fisica"),10);
        let fisica = document.getElementById("calificaciones_alumno_fisica");
        fisica.innerHTML = valor.fisica;
        localStorage.setItem("newtable",JSON.stringify(newtable));
    } else {
        alert("Usted no esta autorizado para hacer ningun cambio");
    }
}
function promedio(){
    let key = document.getElementById("calificaciones_input_password_alumno").value;
    let valor = newtable.get_value(key);
    if(valor != undefined){    
        valor = valor.calificaciones;
        let promedio = (valor.español+valor.matematicas+valor.historia+valor.civica_y_etica+valor.biologia+valor.ingles+valor.frances+valor.educacion_fisica+valor.arte+valor.quimica+valor.fisica)/11;
        promedio = Math.floor(promedio);
        let promedio_ventana = document.getElementById("calificaciones_alumno_promedio");
        promedio_ventana.innerHTML = promedio;
    } 
}

function delete_value(){
    let password = prompt("Escribe el password para hacer las modificaciones")
    if(password == admin.password){
        let key = prompt("Escribe el password del alumno que quieres eliminar");
        valor = newtable.get_value(key);
        if(valor != undefined){
            alert("El nombre del alumno que vas a eliminar es " + valor.nombre + " " + valor.apellido);
            let opcion = prompt("Estas seguro que lo quieres eliminar. Y para si o N para no");
            if(opcion == "Y" || opcion == "y"){
                newtable.remove(key);
                localStorage.setItem("newtable",JSON.stringify(newtable));
                alert("El alumno se elimino correctamente");
            } else {
                alert("No se hicieron cambios en la base de datos");
            }
        } else {
            alert("El alumno no esta enla base de datos");
        }
    } else {
        alert("Usted no esta autorizado para hacer modificaciones")
    }
}

function get_list(){
    let tabla_ord = [];
    for(i = 0; i < newtable.table.length; i++){
        let valor = newtable.table[i];
        if(valor != null){
            for(j = 0;j < newtable.table[i].length; j++){
                let valor_1 = newtable.table[i][j][1].apellido;
                tabla_ord.push(newtable.table[i][j]);
            }
        }
    }
    let newlist = [];
    for(i = 0;i < tabla_ord.length; i++){
        newlist.push(tabla_ord[i][1].apellido + " " + tabla_ord[i][1].nombre)
    }
    return newlist;
} 

const quickSort = (arr) => {
    if(arr.length <= 1){
        return arr
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

function print_list_general(){
    let arr = get_list();
    let list_ord = quickSort(arr);
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista general esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_esp(){
    let list_ord = esp;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Español esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_mat(){
    let list_ord = mat;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Matematicas esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_his(){
    let list_ord = his;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Historia esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_civ_y_eti(){
    let list_ord = civ_y_eti;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Civica y Etica esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_bio(){
    let list_ord = bio;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Biologia esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_ing(){
    let list_ord = ing;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Ingles esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_fran(){
    let list_ord = fran;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Frances esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_edu_fis(){
    let list_ord = edu_fis;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Educacion Fisica esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_art(){
    let list_ord = art;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Arte esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_quim(){
    let list_ord = quim;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Quimica esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}
function print_list_fis(){
    let list_ord = fis;
    if(list_ord.length > 0){
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = list_ord[0];
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = list_ord[1];
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = list_ord[2];
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = list_ord[3];
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = list_ord[4];
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = list_ord[5];
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = list_ord[6];
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = list_ord[7];
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = list_ord[8];
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = list_ord[9];
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = list_ord[10];
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = list_ord[11];
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = list_ord[12];
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = list_ord[13];
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = list_ord[14];
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = list_ord[15];
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = list_ord[16];
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = list_ord[17];
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = list_ord[18];
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = list_ord[19];
    } else {
        alert("La lista de Fisica esta vacia");
        let alumno1 = document.getElementById("lista_nombre_alumno1");
        alumno1.innerHTML = "";
        let alumno2 = document.getElementById("lista_nombre_alumno2");
        alumno2.innerHTML = "";
        let alumno3 = document.getElementById("lista_nombre_alumno3");
        alumno3.innerHTML = "";
        let alumno4 = document.getElementById("lista_nombre_alumno4");
        alumno4.innerHTML = "";
        let alumno5 = document.getElementById("lista_nombre_alumno5");
        alumno5.innerHTML = "";
        let alumno6 = document.getElementById("lista_nombre_alumno6");
        alumno6.innerHTML = "";
        let alumno7 = document.getElementById("lista_nombre_alumno7");
        alumno7.innerHTML = "";
        let alumno8 = document.getElementById("lista_nombre_alumno8");
        alumno8.innerHTML = "";
        let alumno9 = document.getElementById("lista_nombre_alumno9");
        alumno9.innerHTML = "";
        let alumno10 = document.getElementById("lista_nombre_alumno10");
        alumno10.innerHTML = "";
        let alumno11 = document.getElementById("lista_nombre_alumno11");
        alumno11.innerHTML = "";
        let alumno12 = document.getElementById("lista_nombre_alumno12");
        alumno12.innerHTML = "";
        let alumno13 = document.getElementById("lista_nombre_alumno13");
        alumno13.innerHTML = "";
        let alumno14 = document.getElementById("lista_nombre_alumno14");
        alumno14.innerHTML = "";
        let alumno15 = document.getElementById("lista_nombre_alumno15");
        alumno15.innerHTML = "";
        let alumno16 = document.getElementById("lista_nombre_alumno16");
        alumno16.innerHTML = "";
        let alumno17 = document.getElementById("lista_nombre_alumno17");
        alumno17.innerHTML = "";
        let alumno18 = document.getElementById("lista_nombre_alumno18");
        alumno18.innerHTML = "";
        let alumno19 = document.getElementById("lista_nombre_alumno19");
        alumno19.innerHTML = "";
        let alumno20 = document.getElementById("lista_nombre_alumno20");
        alumno20.innerHTML = "";
    }
}

function print_materias(){
    if(materias != []){
        let materia1 = document.getElementById("inscripcion_nombre_materia1");
        materia1.innerHTML = "Español";
        let materia2 = document.getElementById("inscripcion_nombre_materia2");
        materia2.innerHTML = "Matematicas";
        let materia3 = document.getElementById("inscripcion_nombre_materia3");
        materia3.innerHTML = "Historia";
        let materia4 = document.getElementById("inscripcion_nombre_materia4");
        materia4.innerHTML = "Civica y etica";
        let materia5 = document.getElementById("inscripcion_nombre_materia5");
        materia5.innerHTML = "Biologia";
        let materia6 = document.getElementById("inscripcion_nombre_materia6");
        materia6.innerHTML = "Ingles";
        let materia7 = document.getElementById("inscripcion_nombre_materia7");
        materia7.innerHTML = "Frances";
        let materia8 = document.getElementById("inscripcion_nombre_materia8");
        materia8.innerHTML = "Educacion Fisica";
        let materia9 = document.getElementById("inscripcion_nombre_materia9");
        materia9.innerHTML = "Arte";
        let materia10 = document.getElementById("inscripcion_nombre_materia10");
        materia10.innerHTML = "Quimica";
        let materia11 = document.getElementById("inscripcion_nombre_materia11");
        materia11.innerHTML = "Fisica";
    } else {
        alert("La materia no esta en la base de datos favor de registrarlo");
        document.getElementById("inscripcion_input_password_materia").value = "";
        let materia1 = document.getElementById("inscripcion_nombre_materia1");
        materia1.innerHTML = "";
        let materia2 = document.getElementById("inscripcion_nombre_materia2");
        materia2.innerHTML = "";
        let materia3 = document.getElementById("inscripcion_npmbre_materia3");
        materia3.innerHTML = "";
        let materia4 = document.getElementById("inscripcion_nombre_materia4");
        materia4.innerHTML = "";
        let materia5 = document.getElementById("inscripcion_nombre_materia5");
        materia5.innerHTML = "";
        let materia6 = document.getElementById("inscripcion_nombre_materia6");
        materia6.innerHTML = "";
        let materia7 = document.getElementById("inscripcion_nombre_materia7");
        materia7.innerHTML = "";
        let materia8 = document.getElementById("inscripcion_nombre_materia8");
        materia8.innerHTML = "";
        let materia9 = document.getElementById("inscripcion_nombre_materia9");
        materia9.innerHTML = "";
        let materia10 = document.getElementById("inscripcion_nombre_materia10");
        materia10.innerHTML = "";
        let materia11 = document.getElementById("inscripcion_nombre_materia11");
        materia11.innerHTML = "";
    }
}

function inscribirse_esp(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Español");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.español;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.español.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Español");
                                    return false;
                                }
                            }
                        } 
                        materias.español.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente a la materia de Español");
                        esp = quickSort(materias.español)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("esp",JSON.stringify(esp));
                        return materias.español;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
}
function inscribirse_mat(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Matematicas");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.matematicas;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.matematicas.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Matematicas");
                                    return false;
                                }
                            }
                        } 
                        materias.matematicas.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente a la materia de matematicas");
                        mat = quickSort(materias.matematicas)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("mat",JSON.stringify(mat));
                        return materias.matematicas;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
}    
function inscribirse_his(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Historia");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.historia;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.historia.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Historia");
                                    return false;
                                }
                            }
                        } 
                        materias.historia.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente a la materia de Historia");
                        his = quickSort(materias.matematicas)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("his",JSON.stringify(his));
                        return materias.historia;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
} 
function inscribirse_civ_y_eti(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Civica y Etica");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.civica_y_etica;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.civica_y_etica.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Civica y Etica");
                                    return false;
                                }
                            }
                        } 
                        materias.civica_y_etica.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente a la materia de civica y etica");
                        civ_y_eti = quickSort(materias.civica_y_etica)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("civ_y_eti",JSON.stringify(civ_y_eti));
                        return materias.civica_y_etica;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
} 
function inscribirse_bio(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de biologia");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.biologia;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.biologia.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de biologia");
                                    return false;
                                }
                            }
                        } 
                        materias.biologia.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente en la materia de biologia");
                        bio = quickSort(materias.biologia)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("bio",JSON.stringify(bio));
                        return materias.biologia;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
}
function inscribirse_ing(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Ingles");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.ingles;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.ingles.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Ingles");
                                    return false;
                                }
                            }
                        } 
                        materias.ingles.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente en la materia de Ingles");
                        ing = quickSort(materias.ingles)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("ing",JSON.stringify(ing));
                        return materias.ingles;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
} 
function inscribirse_fran(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Frances");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.frances;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.frances.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Frances");
                                    return false;
                                }
                            }
                        } 
                        materias.frances.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente en la materia de Frances");
                        fran = quickSort(materias.ingles)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("fran",JSON.stringify(fran));
                        return materias.frances;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
}
function inscribirse_edu_fis(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Educacion Fisica");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.educacion_fisica;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.educacion_fisica.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Educacion Fisica");
                                    return false;
                                }
                            }
                        } 
                        materias.educacion_fisica.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente en la materia de Educacion Fisica");
                        edu_fis = quickSort(materias.educacion_fisica)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("edu_fis",JSON.stringify(edu_fis));
                        return materias.educacion_fisica;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
}
function inscribirse_art(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Arte");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.arte;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.arte.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Arte");
                                    return false;
                                }
                            }
                        } 
                        materias.arte.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente en la materia de Arte");
                        art = quickSort(materias.arte)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("art",JSON.stringify(art));
                        return materias.arte;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
}
function inscribirse_quim(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Quimica");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.quimica;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.quimica.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Quimica");
                                    return false;
                                }
                            }
                        } 
                        materias.quimica.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente en la materia de Quimica");
                        quim = quickSort(materias.quimica)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("quim",JSON.stringify(quim));
                        return materias.quimica;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
}   
function inscribirse_fis(){
    let password = prompt("Escribe tu password para inscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres inscribirte a la clase de Fisica");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.fisica;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.fisica.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    alert("Ya estas inscrito en la materia de Fisica");
                                    return false;
                                }
                            }
                        } 
                        materias.fisica.push(valor[j][1].apellido + " " + valor[j][1].nombre)
                        alert("Te inscribiste correctamente en la materia de Fisica");
                        fis = quickSort(materias.fisica)
                        localStorage.setItem("materias",JSON.stringify(materias));
                        localStorage.setItem("fis",JSON.stringify(fis));
                        return materias.fisica;
                    } 
                }
                 
            } 
        }
        alert("El password que escribiste no es correcto o no se encuentra en la base de datos");
                return false;
    } else {
        alert("No te inscribiste a esta clase");
        return false;
    }
}

function desinscribirse_esp(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Español");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.español;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.español.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.español.splice(k,1);
                                    esp = quickSort(materias.español);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("esp",JSON.stringify(esp));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Español");
                                    return materias.español;
                                }
                            }
                            alert("No estas inscrito en la clase de Español");
                            return materias.español;
                        }
                        alert("La materia de Español no tiene integrantes")
                        return materias.español; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}
function desinscribirse_mat(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Matematicas");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.matematicas;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.matematicas.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.matematicas.splice(k,1);
                                    mat = quickSort(materias.matematicas);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("mat",JSON.stringify(mat));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Matematicas");
                                    return materias.matematicas;
                                }
                            }
                            alert("No estas inscrito en la clase de Matematicas");
                            return materias.matematicas;
                        }
                        alert("La materia de Matematicas no tiene integrantes")
                        return materias.matematicas; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}
function desinscribirse_his(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Historia");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.historia;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.historia.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.historia.splice(k,1);
                                    his = quickSort(materias.historia);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("his",JSON.stringify(his));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Historia");
                                    return materias.historia;
                                }
                            }
                            alert("No estas inscrito en la clase de Historia");
                            return materias.historia;
                        }
                        alert("La materia de Historia no tiene integrantes")
                        return materias.historia; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}
function desinscribirse_civ_y_eti(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Civica y Etica");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.civica_y_etica;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.civica_y_etica.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.civica_y_etica.splice(k,1);
                                    civ_y_eti = quickSort(materias.civica_y_etica);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("civ_y_eti",JSON.stringify(civ_y_eti));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Civica y Etica");
                                    return materias.civica_y_etica;
                                }
                            }
                            alert("No estas inscrito en la clase de Español");
                            return materias.civica_y_etica;
                        }
                        alert("La materia de Español no tiene integrantes")
                        return materias.civica_y_etica; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}
function desinscribirse_bio(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Biologia");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.biologia;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.biologia.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.biologia.splice(k,1);
                                    bio = quickSort(materias.biologia);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("bio",JSON.stringify(bio));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Biologia");
                                    return materias.biologia;
                                }
                            }
                            alert("No estas inscrito en la clase de Español");
                            return materias.biologia;
                        }
                        alert("La materia de Español no tiene integrantes")
                        return materias.biologia; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}
function desinscribirse_ing(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Ingles");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.ingles;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.ingles.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.ingles.splice(k,1);
                                    ing = quickSort(materias.ingles);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("ing",JSON.stringify(ing));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Ingles");
                                    return materias.ingles;
                                }
                            }
                            alert("No estas inscrito en la clase de Ingles");
                            return materias.ingles;
                        }
                        alert("La materia de Ingles no tiene integrantes")
                        return materias.ingles; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}    
function desinscribirse_fran(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Frances");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.frances;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.frances.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.frances.splice(k,1);
                                    fran = quickSort(materias.frances);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("fran",JSON.stringify(fran));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Frances");
                                    return materias.frances;
                                }
                            }
                            alert("No estas inscrito en la clase de Frances");
                            return materias.frances;
                        }
                        alert("La materia de Frances no tiene integrantes")
                        return materias.frances; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}    
function desinscribirse_edu_fis(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Educacion Fisica");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.educacion_fisica;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.educacion_fisica.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.educacion_fisica.splice(k,1);
                                    edu_fis = quickSort(materias.educacion_fisica);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("edu_fis",JSON.stringify(edu_fis));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Educacion Fisica");
                                    return materias.educacion_fisica;
                                }
                            }
                            alert("No estas inscrito en la clase de Educacion Fisica");
                            return materias.educacion_fisica;
                        }
                        alert("La materia de Frances no tiene Educacion Fisica")
                        return materias.educacion_fisica; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}
function desinscribirse_art(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Arte");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.arte;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.arte.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.arte.splice(k,1);
                                    art = quickSort(materias.arte);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("art",JSON.stringify(art));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Arte");
                                    return materias.arte;
                                }
                            }
                            alert("No estas inscrito en la clase de Arte");
                            return materias.arte;
                        }
                        alert("La materia de Arte no tiene integrantes")
                        return materias.arte; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}
function desinscribirse_quim(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Quimica");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.quimica;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.quimica.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.quimica.splice(k,1);
                                    quim = quickSort(materias.quimica);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("quim",JSON.stringify(quim));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Quimica");
                                    return materias.quimica;
                                }
                            }
                            alert("No estas inscrito en la clase de Quimica");
                            return materias.quimica;
                        }
                        alert("La materia de Quimica no tiene integrantes")
                        return materias.quimica; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}
function desinscribirse_fis(){
    let password = prompt("Escribe tu password para desinscribirte en esta materia");
    let desicion = confirm("Estas seguro que quieres desinscribirte a la clase de Fisica");
    if(desicion == true){
        for(i = 0; i < newtable.table.length; i++){
            let valor = newtable.table[i];
            if(valor != null){
                for(j = 0; j < valor.length; j++){
                    if(valor[j][1].password == password){
                        let comp = materias.fisica;
                        if(comp.length != 0){
                            for(k = 0; k <= materias.fisica.length; k++){
                                if(valor[j][1].apellido + " " + valor[j][1].nombre == comp[k]){
                                    let desinscrito = materias.fisica.splice(k,1);
                                    fis = quickSort(materias.fisica);
                                    localStorage.setItem("materias",JSON.stringify(materias));
                                    localStorage.setItem("fis",JSON.stringify(fis));
                                    alert("El alumno " + desinscrito + " se desinscribio correctamente de la clase de Fisica");
                                    return materias.fisica;
                                }
                            }
                            alert("No estas inscrito en la clase de Fisica");
                            return materias.fisica;
                        }
                        alert("La materia de Fisica no tiene integrantes")
                        return materias.fisica; 
                    }         
                }
            }     
        }
        alert("El password que escribio no es correcto o no se encuentra en la base de datos");      
    } else {
        alert("No te desinscribiste a esta clase");
        return false;
    }
}