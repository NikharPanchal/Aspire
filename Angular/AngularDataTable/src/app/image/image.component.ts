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
  userFile: any = File;
  message: string[] = [];
  constructor(private service: UserserviceService) { }

  ngOnInit(): void {
    this.imageform = new FormGroup({
      image: new FormControl('', Validators.required)
    })
  }

  // selectFile(event: any) {
  //   const file = event.target.files.item(0);

  //   if (file.type.match('image.*')) {
  //     var size = event.target.files[0].size;
  //     if (size > 1000000) {
  //       alert("size must not exceeds 1 MB");
  //     }
  //     else {
  //       this.selectedFiles = event.target.files;
  //     }
  //   } else {
  //     alert('invalid format!');
  //   }

  // }
  addTagToSelectedList(value: any) {
    throw new Error('Method not implemented.');
  }

  // storeImg() {
  //   const formData = new FormData();
  //   this.service.saveFile(this.imageform.value.image).subscribe((data) => {
  //     console.log(data);
  //   })
  // }

  onSelectFile(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
  }

  storeImg() {
    if (this.imageform.valid) {
      const formData = new FormData();
      formData.append('file', this.userFile);


      this.service.saveFile(formData).subscribe((data) => {
        console.log(data);
        console.log("save success");
      })
    }
  }
}
