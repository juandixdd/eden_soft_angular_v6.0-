import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil, first } from 'rxjs/operators';
import { Subject } from 'rxjs';


import { CoreConfigService } from '@core/services/config.service';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss']
})
export class AccesoComponent implements OnInit {
//  Public
public coreConfig: any;
public loading = false;
public submitted = false;
public returnUrl: string;
public error = '';
public passwordTextType: boolean;
user: any = {};

// Private
private _unsubscribeAll: Subject<any>;

/**
 * Constructor
 *
 * @param {CoreConfigService} _coreConfigService
 */
constructor(
  private _coreConfigService: CoreConfigService,
  private _formBuilder: FormBuilder,
  private _route: ActivatedRoute,
  private _router: Router,
  private fb: FormBuilder,
  private loginService: LoginService,
  private router: Router

) {


  this._unsubscribeAll = new Subject();

  // Configure the layout
  this._coreConfigService.config = {
    layout: {
      navbar: {
        hidden: true
      },
      menu: {
        hidden: true
      },
      footer: {
        hidden: false
      },
      customizer: false,
      enableLocalStorage: false
    }
  };
}


public loginForm: FormGroup = this.fb.group({
  email: [
    "",
    [Validators.required, Validators.email],
  ],
  password: [
    "",
    [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
  ],
})

/**
 * Toggle password
 */
togglePasswordTextType() {
  this.passwordTextType = !this.passwordTextType;
}

onSubmit() {


}

ngOnInit(): void {

}

loginUser() {
  this.user.email = this.loginForm.controls['email'].value;
  this.user.password = this.loginForm.controls['password'].value;

  this.loginService.login(this.user).subscribe(
    (res: any) => {
      if (res.statusCode == 200) {
        console.log("Login exitoso")
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login exitoso',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.userId);
        this.router.navigate(['main/dashboard']);
      } else {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El usuario o la contraseña son incorrectos'
        })
      }
    }
  )

}

/**
   * On destroy
   */
ngOnDestroy(): void {
  // Unsubscribe from all subscriptions
  this._unsubscribeAll.next();
  this._unsubscribeAll.complete();
}

}
