import { UserSessionService } from '../services/user-session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private sessionService: UserSessionService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.sessionService.removeAll();
    this.router.navigate(['/login']);
  }

}
