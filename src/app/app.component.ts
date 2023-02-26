import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='nasa';

   imgOfTheDay = '';
  
  constructor(public nasaService: NasaService) {}

 

   
  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((data) => 
      this.imgOfTheDay = data.url);
    
  }
}