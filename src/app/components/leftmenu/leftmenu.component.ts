import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-leftmenu',
  standalone: true,
  imports: [MatSidenavModule, TopmenuComponent, MatIconModule, MatButtonModule],
  templateUrl: './leftmenu.component.html',
  styleUrl: './leftmenu.component.scss'
})
export class LeftmenuComponent {
  leftmenuActive = true;
}
