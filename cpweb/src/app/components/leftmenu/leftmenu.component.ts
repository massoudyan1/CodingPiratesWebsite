import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TopmenuComponent } from '../topmenu/topmenu.component';

@Component({
  selector: 'app-leftmenu',
  standalone: true,
  imports: [MatSidenavModule, TopmenuComponent],
  templateUrl: './leftmenu.component.html',
  styleUrl: './leftmenu.component.scss'
})
export class LeftmenuComponent {
  leftmenuActive = false;
}
