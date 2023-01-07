import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  isSubmit: boolean = false;
  constructor(private fb: FormBuilder) {}
  @Output () crateUser = new EventEmitter<any>();


  

  ngOnInit(): void {}

  /**
   * Aquí creamos los campos necesarios para crear el usuario con el FormBuilder
   */

  registrarUsuario = this.fb.group(
    {
      nom: new FormControl('', [Validators.required]),
      cognoms: new FormControl('', [Validators.required]),
      edat: new FormControl('', [Validators.required]),
      descripcio: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      correu: new FormControl('', [Validators.required, Validators.email]),
      clau: new FormControl('', [Validators.required]),
      replicaClau: new FormControl('', [Validators.required]),
    },
    {
      validator: this.ConfirmedValidator('clau', 'replicaClau'),
    }
  );

  /**
   *  Con este get creamos una key para controlar los errores del formulario
   */

  get formControl(): { [key: string]: AbstractControl } {
    return this.registrarUsuario.controls;
  }

  /**
   *
   * @param controlName
   * @param matchingControlName
   * @returns Compara ambas contraseñas. En caso que esten bien devuelve true, en caso
   * de que esten incorrectas devuelve error
   */

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  /**
   *
   * @returns Comparamos si el formulario está bien, si está bien se enviará, si no se notificará al usuario.
   */

  submit() {
    this.isSubmit = true;
    
    if (this.registrarUsuario.valid) {
      console.log(this.registrarUsuario.value);
      this.crateUser.emit(this.registrarUsuario.value)
      return alert('esta todo bien');

    } else {
      return alert('hay algo mal...');
    }
  }



}