import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, FormsModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {
  public userService = inject(UsersService)


}
