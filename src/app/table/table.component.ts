import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SendCash } from '../placeholder/send-cash';
import { ServiceService } from './../services/service.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  returnGet: SendCash[];
  constructor(
    private service: ServiceService,
    ) { }
  public ngOnInit(): void {
    this.returnGetFunc()
  }

  public returnGetFunc() {
    this.service.getReturn().subscribe((returnGet: SendCash[]): void=> {
     this.returnGet = returnGet;
     this.unifiqueValue();
    }, error => console.log(error)
    );
  }
  // edit(id: string) {
  //   this.service.update(id);
  //   this.router.navigateByUrl('createUpdate');
  // }

  public unifiqueValue() {
    const reduces = this.returnGet.reduce((ac, el) => ac + parseFloat(el.valueCash), 0);
    return reduces;
  }
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
            this.service.remove(id).subscribe(()=> {
              window.location.reload();
            })
          })
        }
      })
  }
}
