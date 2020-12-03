import { ProfileService } from './../core/services/profile.service';
import { UserService } from './../core/services/user.service';
import { Profile } from './../shared/models/profile.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-journalists',
  templateUrl: './journalists.component.html',
  styleUrls: ['./journalists.component.scss'],
})
export class JournalistsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['username', 'role', 'status'];
  data: Profile[] = [];
  dataSource = new MatTableDataSource(this.data);
  // query opmaak shit
  resultsLength = 0;
  // data aan het laden
  isLoadingResults = true;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.runQuery();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  delete(username: string) {
    this.profileService.delete(username).subscribe(() => {
      this.runQuery();
    });
  }

  runQuery() {
    // console.log(query);
    this.isLoadingResults = true;

    this.profileService.all().subscribe((data) => {
      this.isLoadingResults = false;
      console.log(data);
      this.data = data.profiles;
      this.dataSource.data = this.data;
      this.resultsLength = data.profilesCount;
    });
  }
}
