import { Response } from '@angular/http';
import { MediaService } from './../services/media.service';
import { Component, OnInit } from '@angular/core';
import { DigitransitService } from './../services/digitransit.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
private routes: any = [];
  private images: any = [];
  private stops: any = [];
  
  constructor(private mediaService: MediaService, private digitransitService: DigitransitService) { }

  ngOnInit() {
    this.mediaService.getAllMedia().subscribe(
      (res: Response) => {
        this.images = res;
        console.log(this.images);
      }
    );

    this.digitransitService.getData('Saarnitie').subscribe(
      (res) => {
        console.log(res);
        this.stops = res.data.stops;
      }
    );
  }

}
