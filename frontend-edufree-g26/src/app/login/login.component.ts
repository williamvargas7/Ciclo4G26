import { Component, OnInit } from '@angular/core';


interface Usuario{
  
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titulo="Login Edufree G26";
  codigoUsuario="";
  contrasenia="";
  constructor() { }

  ngOnInit(): void {
  }

  mostrarInfo(): void {
    alert("El correo del usuario es: "+this.codigoUsuario);
  } 

}
