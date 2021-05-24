import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  urlImage: string = "../assets/img/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser@3x-3.png"

  constructor() { }

  ngOnInit(): void {
  }
  onMouseOver(n){
     switch(n) {
         case 1: {
             this.urlImage = "../assets/img/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser@3x-3.png"
             break;
         }
         case 2: {
             this.urlImage = "../assets/img/big-MOMENTUM-TRUEWIRELESS2@2x-2.png"
             break;
         }
         case 3: {
             this.urlImage = "../assets/img/Screen Shot 2020-08-11 at 10.15-5.png"
             break;
         }
         default: {
             this.urlImage = "../assets/img/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser@3x-3.png"
             break;
         }
     }
  }
  onMouseLeave(){
         this.urlImage = "../assets/img/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser@3x-3.png"
  }


}
