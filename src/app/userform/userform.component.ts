import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  @ViewChild('f')  signUpForm: NgForm;
  defaultQuestion = "teacher";
  answer: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }


  onSubmit() {
    console.log(this.signUpForm);
    console.log(this.signUpForm.value)
  }
}
