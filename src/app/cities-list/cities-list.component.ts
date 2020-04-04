import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../Model/user.model';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';
export interface City{
  cityName:string;
}
@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {
  form: FormGroup;
 
  cities:{};
  user:User[]
  constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.form= this.formBuilder.group({
      cityName:['']
  })
  
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



}
