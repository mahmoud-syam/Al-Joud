import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-auth',
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.css']
})
export class NavAuthComponent {
  isscrolling = false;

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {

        this.isscrolling = false;
      } else {
        this.isscrolling = true;
      }
    })
  }
}
