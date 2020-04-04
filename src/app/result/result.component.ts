import { Component, OnInit, Output } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
@Output('master') masterName:ListComponent

  constructor() { }

  ngOnInit() {
  }

}
