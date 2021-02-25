import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  data:string="good evening"
title='myproject';
  style1={'color':'red'}
  style2={'color':'blue'}
  check='flase'
  
constructor() { }

ngOnInit(): void {
}

}





  // colors:any
  // color:any
  // addcolor(event:any){
  //   this.color=(event.target as HTMLInputElement).value
  //   }
  // selectcolor='';
  // color=[
  //   {
  //     name:'red'
  //   },
  //   {
  //   name:'blue'
  //   }
  // ]
  

  

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
