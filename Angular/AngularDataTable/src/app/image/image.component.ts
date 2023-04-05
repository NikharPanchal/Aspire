import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../data-table/service/userservice.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  imageform!: FormGroup;
  selectedFiles?: FileList;
  message: string[] = [];
  constructor(private service: UserserviceService) { }

  ngOnInit(): void {
    this.imageform = new FormGroup({
      image: new FormControl('', Validators.required)
    })
  }
  storeImg() {
    console.log(this.imageform.value.image);
    this.service.saveFile(this.imageform).subscribe((data) => {
      console.log(data);
    })
  }


}
