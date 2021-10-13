import { Component, OnInit,Input } from '@angular/core';
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
  Pedidos:Persona[]=[]


  nuevoPedido:Persona={ 
    IDCLiente:'',
    DNI:'',
    Nombres:'',
    Apellidos:'',
    Domicilio:'',
    Telefono:'',
    Fecha_Nacimiento:'',
    Genero:'',
    Metros_Cubicos:0,

  }
  enviar():void
  { 
    if(this.nuevoPedido.Nombres.trim().length==0)  {
    console.log('NO paso');
    return;
    } 
    this.Pedidos.push(this.nuevoPedido)
    console.log(this.nuevoPedido);

  }

}
