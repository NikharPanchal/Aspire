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

  selectFile(event: any) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      var size = event.target.files[0].size;
      if (size > 1000000) {
        alert("size must not exceeds 1 MB");
      }
      else {
        this.selectedFiles = event.target.files;
      }
    } else {
      alert('invalid format!');
    }

  }
  addTagToSelectedList(value: any) {
    throw new Error('Method not implemented.');
  }

  storeImg() {
    const formData = new FormData();
    this.service.saveFile(this.imageform.value.image).subscribe((data) => {
      console.log(data);
    })
  }


}
