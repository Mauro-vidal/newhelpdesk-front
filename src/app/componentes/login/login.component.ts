import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  // Certifique-se de ter o arquivo HTML correspondente
  styleUrls: ['./login.component.css']  // Certifique-se de ter o arquivo CSS correspondente
})
export class LoginComponent implements OnInit {  // Certifique-se de adicionar 'implements OnInit'

  email = new FormControl(null, Validators.required);  // Adicione a declaração da variável 'email'
  senha = new FormControl(null, Validators.minLength(3));

  creds: Credenciais = { email: '', senha: '' };  // Certifique-se de declarar 'creds'

  constructor(private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.service.sucsessfullLogin(resposta.headers.get('Authorization').substring(7));
      this.router.navigate(['']);
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos');
    });
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid;
  }
}
