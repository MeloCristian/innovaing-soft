import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor() { }
 array=[
  {id:"1",name:"Vasija",img1:"https://www.arquitecturapura.com/wp-content/uploads/2019/12/artesan%C3%ADa-antigua.jpg",img2:"https://artesaniasdecolombia.com.co/PortalAC/images/dia-del-artesano-2016-artesanias-colombia-2.jpg",
  description:" Hecho a mano, color: verde, medidas: alto 17.8cm,largo 38.1cm,ancho 29.2cm",price:"$1.000"},
  {id:"1",name:"Platos",img1:"https://technocio.com/wp-content/uploads/2020/11/Artesanias-de-Quito.jpg",img2:"https://www.lared1061.com/wp-content/uploads/2022/08/Foto-2.jpg",
  description:"Este color verde cazuela con tapa es ideal para hacer sopas guisos y otros casserole-style platos",price:"$2.000"},
  {id:"1",name:"Jarras",img1:"https://s03.s3c.es/imag/_v0/843x520/0/5/b/artesanias.jpg",img2:"https://www.peru.travel/Contenido/Evento/Imagen/pe/527/1.1/Evento/dia-del-artesano-magdalena-de-cao.jpg",
  description:"Durara muchos años con el uso y cuidado adecuado cada pieza viene con una hoja de inforion de producto en el uso y cuidado para el producto ",price:"$3.000"},
  {id:"1",name:"Cestas",img1:"https://www.conartesanos.com/wp-content/uploads/2021/05/artesanias-de-mimbre-8.jpg",img2:"https://www.arquitecturaydiseno.es/medio/2020/06/08/javier-sanchez-medina-trabajando_90e5d3cf_1280x794.jpg",
  description:" Totalmente natural y segura no contiene toxinas o plomo. en la region semi-desert de Nariño Colombia cazuelas estan hechas a mano ",price:"$4.000"},
  {id:"1",name:"Teteras",img1:"https://ungustito.mx/wp-content/uploads/2022/05/regalale-una-artesania-a-tu-mama-este-10-de-mayo-de-tienda-casart-1.jpg",img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYl4RO9bGwBfSgJ0KWsS3V3Yw4Y5RMAgTMHw&usqp=CAU",
  description:"Totalmente natural y segura no contiene toxinas o plomo. en la region semi-desert de Nariño Colombia cazuelas estan hechas a mano ",price:"$3.000"},
  {id:"1",name:"Cometas",img1:"https://us.123rf.com/450wm/julioaldana/julioaldana2001/julioaldana200100046/138375112-mandala-god-eye-artesan%C3%ADa-mexicana-en-sayulita-m%C3%A9xico-decoraci%C3%B3n-de-la-calle-.jpg?ver=6",img2:"https://blog.seccionamarilla.com.mx/wp-content/uploads/2017/09/21441402_10208105484589561_1473859141_o-1024x768.jpg",
  description:"Totalmente natural y segura no contiene toxinas o plomo. en la region semi-desert de Nariño Colombia cazuelas estan hechas a mano ",price:"$2.000"},

]

  ngOnInit(): void {

  }

  buy(){
    alert("buy")
  }

  chat(){
    alert("chat")
  }

}
