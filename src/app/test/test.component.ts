import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  names=["anna","ammu","roshna","rose"]
  colors=["blue","black","pink","red"]

  constructor() { }

  ngOnInit(): void {
  }

}
