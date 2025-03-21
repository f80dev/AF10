import {Component, inject, OnInit} from '@angular/core';
import {SectionComponent} from '../section/section.component';
import {ReverseblocComponent} from '../reversebloc/reversebloc.component';
import {NgForOf, NgIf} from '@angular/common';
import {ProductComponent} from '../product/product.component';
import {getParams} from '../tools';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [
    SectionComponent,
    ReverseblocComponent,
    NgIf,
    NgForOf,
    ProductComponent
  ],
  templateUrl: './main.component.html',
  standalone: true,
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  routes=inject(ActivatedRoute)

  async ngOnInit()  {
    let params:any=await getParams(this.routes)
    if(params.appli){
      for(let p of this.products){
        if(p.id==params.appli){
          this.open_product(p)
        }
      }
    }
  }


  sel_product:any=undefined
  products:any[]=[
    {
      id: "is",
      title:"Image Scraper",
      version: "1.0",
      description: "Capturer les images d'un site web et les transformer en NFT en quelques clics",
      visual: "https://",
      icon:"./icon__g8_128.png",
      link:"",
      support:""
    },
    {
      id:"nftnow",
      title: "NFT Now",
      version: "1.0",
      icon:"./nftnow_icon_128.png",
      description: "Fabriquer des NFT en quelques clics sur MultiversX",
      visual: "https://",
      link: "https://nftnow.af10.fr",
      support: ""
    },
    {
      id:"tokemon",
      title: "Tokemon",
      version: "1.0",
      icon:"person",
      description: "Capturer des NFT cachés sur une carte",
      visual: "https://",
      link: "https://tokemon.af10.fr",
      support: ""
    },
    {
      id:"secretvault",
      title: "Instant Vault",
      version: "1.0",
      icon:"vault",
      description: "Transférer des NFTs et des coins",
      visual: "https://",
      link: "https://secretvault.af10.fr",
      support: ""
    }
    ]

  open_product(product:any) {
    this.sel_product=product
  }
}
