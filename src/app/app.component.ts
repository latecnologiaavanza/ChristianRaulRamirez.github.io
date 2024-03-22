import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto007';

  art = {
    codigo:0,
    descripcion:"",
    precio:0
  }

  articulos = [
    {codigo:1,descripcion:'papas',precio:10.55},
    {codigo:2,descripcion:'manzanas',precio:12.10},
    {codigo:3,descripcion:'melon',precio:52.30},
    {codigo:4,descripcion:'cebollas',precio:17},
    {codigo:5,descripcion:'calabaza',precio:20}
  ]

  hayRegistros(){
    return this.articulos.length > 0;
  }

  borrar(codigo:number){
    for(let x = 0;x < this.articulos.length;x++){
      if(this.articulos[x].codigo == codigo){
        /*
        Eliminamos un elemento de un array en una posicion especifica, en este caso el metodo esta siendo utilizado 
        para eliminar un elemento del array que corresponde a la posicion x y el segundo parametro 1 indica que solo se eliminara
        un elemento a partir de la pos x
        */
        this.articulos.splice(x,1);
        return;
      }
    }
  }

  agregar(){
    if(this.art.codigo == 0){
      alert('Debe ingresar un código de articulo distinto a cero')
      return;
    }
    for(let x = 0;x < this.articulos.length;x++){
      if(this.articulos[x].codigo == this.art.codigo){
        alert('ya existe un articulo con dicho código')
      return;
      }
    }

    this.articulos.push({
      codigo:this.art.codigo,
      descripcion:this.art.descripcion,
      precio:this.art.precio
    })

    this.art.codigo = 0;
    this.art.descripcion = "";
    this.art.precio = 0;
  }

  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  modificar(){
    for(let x = 0;x < this.articulos.length;x++){
      if(this.articulos[x].codigo == this.art.codigo){
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }
      alert('No existe el código de articulo ingresado')
    }
  }

}
