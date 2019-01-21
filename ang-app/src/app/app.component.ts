import { Component } from '@angular/core';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'ang-app';
  public val:string;
  constructor(private newService :CommonService, ){ }
  ngOnInit() {
	this.getMyFirstMes();
 }
 public getMyFirstMes=()=>{
	this.newService.getmessage().subscribe(Response => {
    this.val=Response;
    console.log(this.val);
	}, (err)=>{
		console.log("no success");
	});
 }
}