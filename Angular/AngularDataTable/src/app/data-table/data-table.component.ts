import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserserviceService } from './service/userservice.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  user: any;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'username', 'userpassword', 'useraddress', 'dob', 'edit', 'delete'];
  constructor(private service: UserserviceService,
    private httpclient: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getAllUser().subscribe((data) => {
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

  ngAfterViewInit() {
  }

  deleteUser(id: any): void {
    console.log(id);
    this.service.deleteUser(id).subscribe(data => {
      this.ngOnInit();
    });
  }
}

export interface Users {
  id: number;
  userName: string;
  userpassword: string;
  useraddress: string;
  dob: string;

}