import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  appName: string = "Pokemon";
  logo: string = "../../../../../assets/img/logo.png";

  constructor(
    private router: Router,
  ) {}

  onSearch(inputSearch: HTMLInputElement) {
    const queryString = inputSearch.value.toLowerCase().trim();
    if (queryString.length > 0) {
      inputSearch.value = "";
      this.router.navigate(["/pokemon/search", queryString]);
    }
    return;
  }

}