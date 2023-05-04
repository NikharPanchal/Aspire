import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginserviceServiceServer } from '../user/service/authenticationService.service.server';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  editBlog: any;
  user: any;
  deleteId: any;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['blogId', 'blogTitle', 'blogDescription', 'image', 'email', 'edit', 'delete'];
  username: any;
  constructor(private service: LoginserviceServiceServer,
    private httpclient: HttpClient, private router: Router,
    public dialog: MatDialog, private formbuilder: FormBuilder) {
  }
  ngOnInit(): void {

    this.service.getAllBlogs().subscribe((data) => {
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
  }
  openEditDialog(blogId: any) {
    const dialogRef = this.dialog.open(EditBlogDialog, {
      width: '500px',
      data: { id: blogId }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.ngOnInit();
      }
    });
  }

  opendialog(id: any): void {
    console.log(id);
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

@Component({
  selector: 'edit-blog-dialog',
  templateUrl: 'edit-blog-dialog.html',
  styleUrls: ['./blog-list.component.css']
})
export class EditBlogDialog implements OnInit {
  imagePath: any;
  userFile: any = File;
  showMsg = '';
  status: any;
  onSelectFile(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.userFile = file;
  }
  editBlog: any;
  username: any;
  token: any;
  temp: any;
  imageDisplay: any;

  update() {
    if (this.editBlog.valid) {

      const formData = new FormData();

      formData.append('file', this.userFile);
      formData.append('blog', JSON.stringify(this.editBlog.value));

      this.service.updateUserBlogData(formData).subscribe((data) => {
        console.log(data);
        this.editConfirm();
      }, (err => {
        this.status = false;
        this.showMsg = "Something went wrong.."
      }))
    }
  }
  public editConfirm() {
    this.dialogRef.close(true);
  }

  onload() {
    this.editBlog = this.formbuilder.group({
      blogId: [],
      blogTitle: ['', [Validators.required, Validators.maxLength(40)]],
      blogDescription: ['', Validators.required],
      email: ['', Validators.required],
    })
  }
  constructor(public dialogRef: MatDialogRef<EditBlogDialog>,
    private formbuilder: FormBuilder, private jwtHelper: JwtHelperService, private service: LoginserviceServiceServer,
    @Inject(MAT_DIALOG_DATA) public data: any, private _sanitizer: DomSanitizer) {


    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
      const decodedToken = this.jwtHelper.decodeToken(this.token);
      this.username = decodedToken.sub;
    }
  }
  ngOnInit(): void {
    this.onload();
    this.service.getBlogbyBlogId(this.data.id).subscribe((res: any) => {
      this.temp = res;
      console.log(res);
      this.editBlog = this.formbuilder.group({
        blogId: this.data.id,
        blogTitle: res[0].blogTitle,
        blogDescription: res[0].blogDescription,
        email: res[0].email,
      })
      this.userFile = res[0].imageByte;
      this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
        + res[0].imageByte);
    })
  }
}