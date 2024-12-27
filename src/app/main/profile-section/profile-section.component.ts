import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-profile-section',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './profile-section.component.html',
  styleUrl: './profile-section.component.scss',
  //encapsulation : ViewEncapsulation.ShadowDom
})
export class ProfileSectionComponent {

}
