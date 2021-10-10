import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SendCash } from '../placeholder/send-cash';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  returnGet: SendCash[] = [];
  constructor(
    private service: ServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.get()
  }

  get() {
    this.service.getReturn().subscribe((returnGet) => {
      this.returnGet = returnGet
    }, error => console.log(error)
    )
  }
  // edit(id: string) {
  //   this.service.update(id);
  //   this.router.navigateByUrl('createUpdate');
  // }
  trash(id: number) {
      Swal.fire({
        title: 'Está certo disso?',
        text: "Voce não poderá reverter a exclusão!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: 'gray',
        confirmButtonText: 'Sim, deletar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deletado!',
            'Seus arquivos foram deletados com sucesso!.',
            'success'
          ).then(()=>{
            this.service.remove(id).subscribe(()=> {})
          }).then(()=> {
            window.location.reload();
          })
        }
      })
  }
}
