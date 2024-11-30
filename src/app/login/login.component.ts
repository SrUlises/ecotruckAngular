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
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  iniciarSesion() {
    if (this.loginForm.invalid) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const { name, password } = this.loginForm.value;

    console.log(name + password);

    this.loginService.login(name, password).subscribe({
      next: (response) => {
        // Guarda el nombre del usuario
        localStorage.setItem('username', response.user.name);

        alert('Inicio de sesión exitoso');
        this.router.navigate(['/home']); // Redirige al componente "Home"
      },
      error: (error) => {
        alert(error.error.message || 'Error al iniciar sesión');
      },
    });
  }
}




