import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginserviceServiceServer } from '../user/service/authenticationService.service.server';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
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
  }
}
