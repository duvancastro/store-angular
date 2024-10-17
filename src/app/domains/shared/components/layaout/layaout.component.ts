
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layaout',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, RouterModule],
  templateUrl: './layaout.component.html',
  styleUrl: './layaout.component.css'
})
export class LayaoutComponent {

}
