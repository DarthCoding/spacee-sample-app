import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Photo } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: Photo[];
  dateControl = new FormControl('');

  photoCount: number;

  constructor(private photoService: PhotoService) {

  }

  ngOnInit(): void {
    this.photoCount = 0;
  }

  submit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photoService.getPhotos(this.dateControl.value).subscribe((res: Photo[]) => {
      this.photos = res;
      this.photoCount = this.photos.length;
    })
  }

}
