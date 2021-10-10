import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   public name = '';
   public pix = '';
   public valueCash = '';

  constructor(
    private service: ServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  send() {
    this.service.send(this.name, this.pix, this.valueCash).subscribe(()=> {
      this.router.navigateByUrl('table')
    }, error=> console.log(error)
    )
  }
}
