import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'v14';
  user = { name: '', age: 0 };

  form: FormGroup<{
    name: FormControl<string>;
    age: FormControl<number>;
  }>;
  constructor(private builder: FormBuilder) {
    this.form = this.builder.nonNullable.group({
      name: ['', [], []],
      age: [0, [], []],
    });

    this.user = { ...this.user, ...this.form.value };
  }
}
