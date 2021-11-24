import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


interface Usuario {
  codigo: string;
  contrasenia: string;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: any;

  titulo = "Login Edufree G2";

  /*usuariologin: Usuario={codigo:'',contrasenia:''};
  codigoUsuario="";
  contrasenia="";*/

  constructor(private fb: FormBuilder) {
    /* this.formLogin=new FormGroup({
      codigo: new FormControl(''),
      contrasenia: new FormControl(''),
    }); */

    this.formLogin = this.fb.group(
      {
        codigo: ['', Validators.required],
        contrasenia: ['', Validators.required]
      }
    );

  }

  ngOnInit(): void {
  }

  mostrarInfo(): void {
    const contrasenia = this.formLogin.controls.contrasenia.value;
    const credenciales = this.formLogin.getRawValue();
    alert(JSON.stringify(credenciales));
    //alert("El correo del usuario es: "+this.usuariologin.codigo);
  }


}
