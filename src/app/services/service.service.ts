import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SendCash } from '../placeholder/send-cash';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

const API = `http://localhost:3000/transations`;

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  send(name: string, pix: string, valueCash: string): Observable<SendCash[]> {
    return this.http.post<SendCash[]>(API, {
      name: name,
      pix: pix,
      valueCash: valueCash,
    }).pipe(take(1))
  }
  getReturn(): Observable<SendCash[]> {
    return this.http.get<SendCash[]>(API)
  }
  remove(id: number): Observable<SendCash[]> {
    const ids = `${API}/${id}`;
    return this.http.delete<SendCash[]>(ids).pipe(take(1))
  }
  //Return the specific ID to the config from update!
  readById(id: string): Observable<SendCash[]> {
    const ids = `${API}/${id}`;
    return this.http.get<SendCash[]>(ids).pipe(take(1))
  }
  update(product: SendCash): Observable<SendCash[]> {
    const ids = `${API}/${product.id}`;
    return this.http.put<SendCash[]>(ids, product).pipe(take(1))
  }
}
