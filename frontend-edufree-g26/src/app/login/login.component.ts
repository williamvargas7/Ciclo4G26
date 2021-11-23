import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


interface Usuario{
  codigo:string;
  contrasenia:string;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: any;

  titulo="Login Edufree G2";

  /*usuariologin: Usuario={codigo:'',contrasenia:''};
  codigoUsuario="";
  contrasenia="";*/

  constructor() {
    this.formGroup=new FormGroup({
      codigo: new FormControl(''),
      contrasenia: new FormControl(''),
    });

   }

  ngOnInit(): void {
  }

  mostrarInfo(): void {
    //alert("El correo del usuario es: "+this.usuariologin.codigo);
  } 
  

}
