import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent 
{
    @Output() public Event= new EventEmitter();
    public send(n:string,a:string,m:string)
    {
        this.Event.emit(n+' '+a+' '+m);
    }
}
