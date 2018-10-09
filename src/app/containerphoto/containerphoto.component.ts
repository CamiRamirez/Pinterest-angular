import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})

export class PhotoContainerComponent implements OnInit {
  public galleryJSON: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/gallery.json').subscribe(images => {
      this.galleryJSON = images as any[];
    });
    err => {
      console.log("Ocurrió un error")
    }
  }
}
