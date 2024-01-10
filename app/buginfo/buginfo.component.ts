import { Component, Output } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buginfo',
  standalone: true,
  imports: [BsDatepickerModule],
  templateUrl: './buginfo.component.html',
  styleUrl: './buginfo.component.css'
})
export class BuginfoComponent {
  @Output() public ev=new EventEmitter() ;
  public send(i:string,e:string)
  {
      this.ev.emit(i+'   '+e);
      
  }

}
