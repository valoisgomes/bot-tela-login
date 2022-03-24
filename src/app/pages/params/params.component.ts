import { ParamsModel } from './../../models/paramsModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
     
      }
    );
  }

  submitParams() 
  {
    debugger
    let dadosParams = this.loginForm.getRawValue() as ParamsModel;
  }

}
