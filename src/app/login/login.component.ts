import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  iniciarSesion() {
    if (this.loginForm.invalid) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const { username, password } = this.loginForm.value;

    console.log(username + password);

    this.loginService.verificarCredenciales(username, password).subscribe(
      (response) => {
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/home']); // Redirigir al componente "Home"
      },
      (error) => {
        alert(error.error.message || 'Error al iniciar sesión');
      }
    );
  }
}




