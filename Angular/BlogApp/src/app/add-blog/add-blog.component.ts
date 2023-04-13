import { HttpHeaderResponse } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginserviceServiceServer } from '../user/service/authenticationService.service.server';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  status: any;
  userFile: any = File;
  showMsg: any;
  blogForm!: FormGroup;
  subimitted: boolean = false;
  token: any;
  username: any;
  emaildef: any;
  dataSource = new MatTableDataSource();
  inputControl = new FormControl('');
  displayedColumns: string[] = ['blogId', 'blogTitle', 'blogDescription', 'image', 'email', 'edit', 'delete'];
  user: any;
  imageData: any;

  constructor(private formbuilder: FormBuilder,
    private jwtHelper: JwtHelperService,
    private service: LoginserviceServiceServer, public dialog: MatDialog) { }


  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      const decodedToken = this.jwtHelper.decodeToken(this.token);
      this.username = decodedToken.sub;
      this.emaildef = this.username;
      console.log(this.emaildef);
    }

    this.service.getBlogbyUserName(this.username).subscribe((data) => {
      this.user = data;
      console.log(this.user);
      this.dataSource = new MatTableDataSource(this.user);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
      (error: HttpHeaderResponse) => {
        console.log(error);
      }
    );

    this.blogForm = this.formbuilder.group({
      blogId: new FormControl(''),
      blogTitle: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      blogDescription: new FormControl('', Validators.required),
      email: new FormControl(this.username, Validators.required)
    })
  }

  displayImage(imageData: any): any {
    this.imageData = 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, imageData));
    return imageData;
  }


  opendeletedialog(id: any) {

    this.dialog.open(DeleteDialogExample, {
      width: '350px',
    }).afterClosed().subscribe((result) => {
      if (result == true) {
        this.service.deleteBlog(id).subscribe((data) => {
          this.ngOnInit();
        });
      }
    })
  }
  onSelectFile(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
  }
  resetField() {
    this.blogForm.get("blogTitle")?.setValue('');
    this.blogForm.get("blogDescription")?.setValue('');
  }

  submit() {
    if (this.blogForm.valid) {
      const formData = new FormData();

      formData.append('file', this.userFile);
      formData.append('blog', JSON.stringify(this.blogForm.value));
      console.log(this.blogForm.value);

      this.service.saveUserBlog(formData).subscribe((data) => {
        console.log(data);
        if (data != null) {
          this.showMsg = "Insert success";
          this.status = true;
          this.ngOnInit();
        }
      }, (err: any) => {
        console.warn('insert failed');
        this.showMsg = 'Blog insert falied';
        this.status = false;
      })
    }
  }

  getBlogs(id: any) {
    if (id != null) {
      this.service.getBlogbyBlogId(id).subscribe((data: any) => {
        console.log(data);
        this.blogForm = this.formbuilder.group({
          blogId: data[0].blogId,
          blogTitle: data[0].blogTitle,
          blogDescription: data[0].blogDescription,
          email: data[0].email
        })
      })
    }
  }
}
@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialogExample {

  public deleteConfirm() {
    this.dialogRef.close(true);
  }
  constructor(public dialogRef: MatDialogRef<DeleteDialogExample>) { }
}
