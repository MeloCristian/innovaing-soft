import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  items=[{name:1},{name:2}]
  constructor(private router: Router) { }

  ngOnInit(): void {
    $.getScript("./assets/js/deafult-dashboard.js")
  }

  tutorial(){
    this.router.navigate(['dashboard/tutorial']);
  }

}
