import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendCash } from 'src/app/placeholder/send-cash';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  public name = '';
  public pix = '';
  public valueCash = '';

  product: SendCash;

  constructor(
    private router: Router,
    private service: ServiceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(product => {
      this.product = product;
    })
  }
  save(): void {
    this.service.update(this.product).subscribe(() => {
    }, error => console.log(error)
    )
  }
  cancel(): void {
    this.router.navigateByUrl('table');
  }
}
