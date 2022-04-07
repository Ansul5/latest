import { Component } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourthApp';
constructor(public formBuilderObj:FormBuilder){}
  // user=[{
  //   Username:'Ansul',
  //   Email:'ansulmishra@mail.com',
  //   Contact:9090403212,
  //   Age:22
  // }]

  

  userForm= this.formBuilderObj.group({
    Username:['Ansul'],
    Email:['mishraansul@gmail.com'],
    Age:[22],
    contact:[9090405020]
  })

  // modalfunction(){
  //   this.routerObj.navigateByUrl('modal')
  // }

}
