import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo3';

  // Propiedades
  producto = {
    id: 0,
    descripcion: '',
    precio: 0
  };

  listaProductos = [
    { id: 1, descripcion: 'Sabritas Adobadas', precio: 20.00 },
    { id: 2, descripcion: 'Atun Dolores', precio: 25.00 },
    { id: 3, descripcion: 'Plutonio', precio: 18.00 },
    { id: 4, descripcion: 'Agua en Polvo', precio: 10.00 },
    { id: 5, descripcion: 'Leche Chavo', precio: 30.00 },
  ];

  // Función para agregar un producto al arreglo
  agregarProducto() {
    if (this.producto.id == 0) {
      alert('El ID del producto no puede ser CERO');
      return;
    }

    // Verificar que el ID no exista
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.producto.id == this.listaProductos[i].id) {
        alert('Ya existe un producto con ese ID');
        return;
      }
    }

    // Dar de alta el producto
    this.listaProductos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });

    // Resetear el objeto producto
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }

  // Función para seleccionar un producto de la tabla
  seleccionarProducto(productoSeleccionado: { id: number; descripcion: string; precio: number }) {
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;
  }

  // Función para modificar un producto existente 
  modificarProducto() {
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (this.producto.id == this.listaProductos[i].id) {
        this.listaProductos[i].descripcion = this.producto.descripcion;
        this.listaProductos[i].precio = this.producto.precio;

        // Resetear el producto
        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        return;
      }
    }
    alert('No existe ese ID');
  }

  // Función para eliminar un producto de la tabla
  eliminarProducto(id: number) {
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (id == this.listaProductos[i].id) {
        this.listaProductos.splice(i, 1);
        return;
      }
    }
  }
}
