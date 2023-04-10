import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginserviceServiceServer } from '../user/service/authenticationService.service.server';
import { MatDialog, MatDialogRef, matDialogAnimations, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  user: any;
  deleteId: any;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fname', 'lname', 'email', 'password', 'role', 'isactive', 'edit', 'delete'];
  constructor(private service: LoginserviceServiceServer,
    private httpclient: HttpClient, private router: Router,
    public dialog: MatDialog) {
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
  changeStatus(id: any) {
    this.dialog.open(ChangeStatusDialog, {
      width: '350px',
    }).afterClosed().subscribe((result) => {
      if (result == true) {
        // this.service.updateStatus(id).subscribe((data) => {
        //   this.ngOnInit();
        // });
        this.service.updateStatus(id).subscribe((data) => {
          console.log(data);
          this.ngOnInit();
        });
      }
    })
  }
  // deleteUser(id: any): void {
  //   console.log(id);
  //   this.deleteId = id;
  //   this.service.deleteUser(id).subscribe((data) => {
  //     this.ngOnInit();
  //   });

  // }

  opendialog(id: any): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '350px',
    }).afterClosed().subscribe((result) => {
      if (result == true) {
        this.service.deleteUser(id).subscribe((data) => {
          this.ngOnInit();
        });
      }
    })
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
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
})
export class DialogAnimationsExampleDialog {

  public deleteConfirm() {
    this.dialogRef.close(true);

  }
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) { }
}

@Component({
  selector: 'change-status-dialog',
  templateUrl: 'status-dialog.html',
})
export class ChangeStatusDialog {
  updateStatus() {
    this.dialogRef.close(true);
  }
  constructor(public dialogRef: MatDialogRef<ChangeStatusDialog>) { }
}