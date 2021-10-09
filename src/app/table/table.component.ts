import { Component, OnInit } from '@angular/core';
import { SendCash } from '../placeholder/send-cash';
import { ServiceService } from './../services/service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  returnGet: SendCash[] = [];
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.service.getReturn().subscribe((returnGet) => {
      this.returnGet = returnGet
    }, error => console.log(error)
    )
  }
  edit() {

  }
  trash(id: number) {
    this.service.remove(id).subscribe(()=> {
    window.location.reload();
    })
  }
}
