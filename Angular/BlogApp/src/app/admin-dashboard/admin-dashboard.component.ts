import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginserviceServiceServer } from '../user/service/authenticationService.service.server';
import { MatDialog, MatDialogRef, matDialogAnimations } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  user: any;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'password', 'role', 'isactive', 'edit', 'delete'];
  constructor(private service: LoginserviceServiceServer,
    private httpclient: HttpClient, private router: Router,
    private dialog:MatDialog) {
  }

  ngOnInit(): void {
    this.service.getAllData().subscribe((data) => {
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

  deleteUser(id: any): void {
    console.log(id);
    this.service.deleteUser(id).subscribe(data => {
      this.ngOnInit();
    });
  }

   opendialog() {
    alert('work');
  }

}

export interface Users {
  id: number;
  fname: string;
  lname: string;
  password: string;
  email: string;
  role: string;
  isactive: boolean;
}
// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialog-animations-example-dialog.html',
// })
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
// }