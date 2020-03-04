import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static:true}) userForm: NgForm;
  subscription = 'Advanced';

  onSubmit(){
    console.log(this.userForm);
  }

  onReset(){
    this.userForm.reset({ subscription: 'Advanced'});
  }
}
