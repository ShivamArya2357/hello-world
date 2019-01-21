import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class CommonService {
  public baseUrl="http://localhost:5000"
  constructor(private http: Http) { }
  public getmessage():Observable<any> {
	return this.http.get(this.baseUrl).pipe(map((response: Response) => response.text()));
}

}
