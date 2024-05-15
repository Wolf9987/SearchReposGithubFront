import { Component, Input } from '@angular/core';
import { Repository } from '../models/repository';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrl: './gallery-item.component.css'
})
export class GalleryItemComponent {

  @Input() item!: Repository;


  constructor(){
  }

  ngOnInit() {
    if(sessionStorage.getItem(this.item.id)){
      this.item.isInSession = true;
    }
   }

   updateSession(item: Repository){
    if(!item.isInSession){
      sessionStorage.setItem(item.id, item.name);
      item.isInSession = true;
    }
    else{
      sessionStorage.removeItem(item.id);
      item.isInSession = false;
    }
    
  }
}


