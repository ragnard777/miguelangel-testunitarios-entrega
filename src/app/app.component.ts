import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  //error en test
  //title = 'Api rest';
  //test ok
  title = 'test-unitarios';
  variableTest = false;
  otraVariablePrueba = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['login']);
    //this.router.navigate(['home']);
  }
}
