import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  logo: string = "../../../../../assets/img/logo.png";

  constructor(private router: Router) {}

  onSearch(queryString: string) {
    if (queryString.length > 0) {
      this.router.navigate(["/pokemon/search", queryString]);
    }
    return;
  }

}