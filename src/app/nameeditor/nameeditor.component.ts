import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-nameeditor',
  templateUrl: './nameeditor.component.html',
  styleUrls: ['./nameeditor.component.css']
})
export class NameeditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name=new FormControl('')
password=new FormControl('')
email=new FormControl('')
phonenumber=new FormControl('')
save(){
  console.log(this.name.value)
  console.log(this.password.value)
  console.log(this.email.value)
  console.log(this.phonenumber.value)
}
}
