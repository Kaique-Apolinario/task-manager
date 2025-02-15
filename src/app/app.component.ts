import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateUpdateComponent } from './components/create-update/create-update.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, RouterLink, ButtonComponent, CreateUpdateComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

    private router:Router = inject(Router);
    currentUrl: string = "";
    itWorked: string = "";
    
    ngOnInit(): void {
      this.router.events.subscribe(() => {this.currentUrl = this.router.url});
    }
  
    receiveTaskName(taskName: any){
      console.log("DALKHOMANN")
      this.itWorked = taskName;
    }
}