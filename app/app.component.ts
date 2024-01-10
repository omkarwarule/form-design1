import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DemoComponent } from './demo/demo.component';
import { RouterLink } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { BuginfoComponent } from './buginfo/buginfo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonsModule,AccordionModule ,TypeaheadModule ,
    TimepickerModule,DemoComponent, RouterLink,PersonalInfoComponent,BuginfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  public bug:string=" ";
  public personal:string=" ";
  public pers:string=" ";
  public nu:string=" ";
  public final()
  {
      this.pers=this.personal;
      this.nu=this.bug;
  }

}
