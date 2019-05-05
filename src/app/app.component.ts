import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      published: true,
      credentials: this.fb.array([]),
    });
  }

  addCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      username: '',
      password: '',
    }));
  }

  removeCreds() {
    const creds = this.form.controls.credentials as FormArray;
    creds.removeAt(0);
  }

  removeAllCreds() {
    const creds = this.form.controls.credentials as FormArray;
      while (0 !== creds.length) {
        creds.removeAt(0);
      }
  }

  removeRow(index) {
    const creds = this.form.controls.credentials as FormArray;
    creds.removeAt(index);
  }

  saveCreds() {
    console.log(this.form.value);
    const creds = this.form.controls.credentials as FormArray;
    this.title = this.form.value;
  }
}
