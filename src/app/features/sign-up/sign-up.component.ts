import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { RoutesEnum } from '../../app.routes';
import { UserApiService } from '../../data-access/__user/api/user-api.service';

@Component({
  selector: 'cap-sign-up',
  imports: [NbCardModule, NbButtonModule, NbInputModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  #fb = inject(FormBuilder);
  #userApiService = inject(UserApiService);
  #router = inject(Router);

  form = this.#fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  handleSubmit() {
    const value = this.form.getRawValue();

    this.#userApiService.signUp(value).subscribe(() => {
      void this.#router.navigateByUrl(RoutesEnum.SignIn);
    });
  }
}
