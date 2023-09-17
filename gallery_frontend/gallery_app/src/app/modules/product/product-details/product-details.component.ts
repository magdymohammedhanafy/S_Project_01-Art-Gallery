import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/i-product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  currPId: number = 0;
  prd: IProduct | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private prdService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currPId = Number(paramMap.get('pid'));
      this.prdService.getProductById(this.currPId).subscribe((products) => {
        this.prd = products.data;
        // console.log(this.prd);
      });
    });
  }
}
