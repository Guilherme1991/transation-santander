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
   product: any = {
    name: '',
    pix: '',
    valueCash: ''
   }
   waitng: boolean = false;
  constructor(
    private service: ServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  send() {
    this.service.send(this.product.name, this.product.pix, this.product.valueCash).subscribe(()=> {
      this.router.navigateByUrl('table')
    }, error=> console.log(error)
    )
  }
  waiting() {
    alert('Deu certo!')
  }
}
