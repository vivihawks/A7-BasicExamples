import { Component, OnChanges, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'complex-form',
  templateUrl : './app.complexform.html'
})
export class ComplexFormComponent implements AfterViewChecked{
  complexForm : FormGroup;

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'firstName' : '',
      'lastName': '',
      'gender' : ['Female'],
      'hiking' : false,
      'running' : true,
      'swimming' : false,
      'address' : {
        'door': '',
        'completeaddress':''
      }
    })
  }

  submitForm(value: any){
    //this.complexForm.value;
    console.log('Reactive Form Data: ')
    console.log(value);
    console.log(this.complexForm.value);
  }
  log(){
    console.log("-------------")
  }
  ngAfterViewChecked(){
    console.log(`View Checked: ${JSON.stringify(this.complexForm.value)}`);
  }
}

//<address>
//</address>
//AddressComponent{
//@Input complexForm : FormGroup
//}