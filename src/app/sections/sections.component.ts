import { SectionService } from './../core/services/section.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Section } from '../shared/models/section.model';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'delete', 'edit'];
  data: Section[] = [];
  dataSource = new MatTableDataSource(this.data);
  // query opmaak shit
  // data aan het laden
  isLoadingResults = true;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private sectionService: SectionService) {}

  ngOnInit(): void {
    this.runQuery();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  delete(name: string) {
    this.sectionService.destroy(name).subscribe(() => {
      this.runQuery();
    });
  }

  runQuery() {
    // console.log(query);
    this.isLoadingResults = true;

    this.sectionService.getAll().subscribe((data) => {
      this.isLoadingResults = false;
      console.log(data);
      this.data = data;
      this.dataSource.data = this.data;
    });
  }
}
