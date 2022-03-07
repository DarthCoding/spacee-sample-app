import { Component, Input, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-photo-tile',
  templateUrl: './photo-tile.component.html',
  styleUrls: ['./photo-tile.component.css']
})
export class PhotoTileComponent implements OnInit {

  @Input() photo: Photo;

  constructor() { }

  ngOnInit(): void {
  }

}
