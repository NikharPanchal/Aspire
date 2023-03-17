import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserserviceService } from './service/userservice.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit {

  user: any;
  constructor(private service: UserserviceService,
    private httpclient: HttpClient) {

  }

  ngOnInit(): void {
    this.service.getAllUser().subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

  displayedColumns: string[] = ['id', 'username', 'userpassword', 'useraddress', 'dob'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

}

export interface Users {
  id: number;
  username: string;
  userpassword: string;
  useraddress: string;
  dob: string;

}

const ELEMENT_DATA = [
  { id: 1, username: 'Hydrogen', userpassword: "Hydrogen", useraddress: "H", dob: "01-02-2020" },
  { id: 2, username: 'Helium', userpassword: "Hydrogen", useraddress: "He", dob: "01-02-2020" },
  { id: 3, username: 'Lithium', userpassword: "Hydrogen", useraddress: "Li", dob: "01-02-2020" },
  { id: 4, username: 'Beryllium', userpassword: "Hydrogen", useraddress: "Be", dob: "01-02-2020" },
  { id: 5, username: 'Boron', userpassword: "Hydrogen", useraddress: "B", dob: "01-02-2020" },
  { id: 6, username: 'Carbon', userpassword: "Hydrogen", useraddress: 'C', dob: "01-02-2020" },
  { id: 7, username: 'Nitrogen', userpassword: "Hydrogen", useraddress: 'N', dob: "01-02-2020" },
  { id: 8, username: 'Oxygen', userpassword: "Hydrogen", useraddress: 'O', dob: "01-02-2020" },
  { id: 9, username: 'Fluorine', userpassword: "Hydrogen", useraddress: 'F', dob: "01-02-2020" },
  { id: 10, username: 'Neon', userpassword: "Hydrogen", useraddress: 'Ne', dob: "01-02-2020" },
  { id: 11, username: 'Sodium', userpassword: "Hydrogen", useraddress: 'Na', dob: "01-02-2020" },
  { id: 12, username: 'Magnesium', userpassword: "Hydrogen", useraddress: 'Mg', dob: "01-02-2020" }
];

