import { Component } from '@angular/core';
import {NavController} from'@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail:NavController) {}
  items=[

    {
      id: 1,
      name:'Product A',
      price: 200,
      detail:'this is a product A',
      imageURL:'https://shop.dior.co.th/cdn/shop/files/Y0996214_C021400061_E01_GHC.jpg?v=1721872253',
    },
    {
      id: 2,
      name:'Product B',
      price: 250,
      detail:'this is a product B',
      imageURL:'https://img.lazcdn.com/g/p/aab2b08c606d0f37bf2d97286580ba6a.jpg_960x960q80.jpg_.webp',
    },
    {
      id: 1,
      name:'Product C',
      price: 300,
      detail:'this is a product C',
      imageURL:'https://www.maybelline.co.th/-/media/project/loreal/brand-sites/mny/apac/th/products/lip-makeup/lip-color/super-stay-vinyl-ink-longwear-liquid-lipstick/145-rogue/p1.jpg?rev=6f5548052e504386b2ff8a739ac1d170&cx=0.52&cy=0.47&cw=315&ch=472&hash=ABCB58CEA0B7C10F0B43D5D3D6DA7D23',
    },
    {
      id: 1,
      name:'Product D',
      price: 350,
      detail:'this is a product D',
      imageURL:'https://image.makewebcdn.com/makeweb/m_1920x0/pyuHEt3NP/BLM/LINE_ALBUM_web_%E0%B9%92%E0%B9%93%E0%B9%91%E0%B9%90%E0%B9%92%E0%B9%96_6__2_.jpg',
    },
  ]

  gotoDetail(i:any){
    this.detail.navigateForward('/detail', {state:{i}})
  }
  

}
