import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.css']
})
export class CoinListComponent implements OnInit {


  bannerData: any;
  currency: string = 'INR'
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap']

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api: ApiService, private router: Router, private currencySer: CurrencyService) { }

  ngOnInit(): void {
    this.getBannerData();
    this.getAllData();
    this.currencySer.getCurrency().subscribe((res) => {
      this.currency = res;
      this.getAllData();
      this.getBannerData();
    })
  }

  getBannerData() {
    this.api.getTrendingCurrency().subscribe((res: any) => {
      // console.log(res)
      this.bannerData = res;
    })
  }

  getAllData() {
    this.api.getCurrencyData(this.currency).subscribe((res: any) => {
      console.log(res)
      // this.bannerData=res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  gotoDetails(row: any) {
    this.router.navigate(['coin-detail', row.id])
  }

}