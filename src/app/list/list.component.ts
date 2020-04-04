import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { User } from '../Model/user.model';


export interface State{
  stateName:string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  form: FormGroup;
  stateInfo: any[] = [];
  user:User[]
 cities:{};
  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.form= this.formBuilder.group({
      stateName:[''],
      cityName:['']
  })


  this.getStates();
  this.getCities();
}



getCities(){
  this.userService.getAllCities().subscribe(
    data2 => {
      this.cities=data2;
      //console.log('Data:', this.countryInfo);
    },
    err => console.log(err),
    () => console.log('complete')
  )
}
getStates(){
  this.userService.getAllStates().
  subscribe(
    data2 => {
      this.stateInfo=data2;
      //console.log('Data:', this.countryInfo);
    },
    err => console.log(err),
    () => console.log('complete')
  )
}
onChangeState(stateId: number) {
  if (stateId) {
    this.userService.getCities(stateId).subscribe(
      data => this.cities = data
    );
  } else {
    this.cities = null;
  }
}
}
