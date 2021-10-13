import { Component, OnInit } from '@angular/core';
interface Persona{ 
  IDCLiente:string,
  DNI:string,
  Nombres:string,
  Apellidos:string,
  Domicilio:string,
  Telefono:String,
  Fecha_Nacimiento:string,
  Genero:string,
  Metros_Cubicos:number,

}
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  nuevoPedido:Persona={ 
    IDCLiente:'01',
    DNI:'23445',
    Nombres:'Juan',
    Apellidos:'Vargas',
    Domicilio:'CUltura',
    Telefono:'992123453',
    Fecha_Nacimiento:'2014/12/7',
    Genero:'Masculino',
    Metros_Cubicos:10,

  }
  enviar():void
  { 
    console.log(this.nuevoPedido);

  }

}
