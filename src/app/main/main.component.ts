import {Component, inject, OnInit} from '@angular/core';
import {SectionComponent} from '../section/section.component';
import {ReverseblocComponent} from '../reversebloc/reversebloc.component';
import {NgForOf, NgIf} from '@angular/common';
import {ProductComponent} from '../product/product.component';
import {getParams} from '../tools';
import {ActivatedRoute} from '@angular/router';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-main',
  imports: [
    SectionComponent,
    ReverseblocComponent,
    NgIf,
    NgForOf,
    ProductComponent,
    MatIcon
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
  contacts:any[]=[
    {
      title:"X",
      icon:"tag",
      link:"https://x.com/AF1050273163669",
    },
    {
      title:"Telegram",
      icon:"call",
      link:"https://t.me/af10_official",
    },
    {
      title:"Youtube",
      icon:"videocam",
      link:"https://www.youtube.com/@AF10-o1y",
    },
    {
      title:"Email",
      icon:"email",
      link:"mailto:contact@af10.fr",
    }
    ]

    products:any[]=[
    {
      id: "is",
      title:"Image Scraper",
      version: "1.0",
      description: "Capturer les images d'un site web et les transformer en NFT en quelques clics",
      visual: "https://",
      icon:"./pacman_red.png",
      link:"https://is.af10.fr",
      support:""
    },
    {
      id:"nftnow",
      title: "NFT Now",
      version: "1.0",
      icon:"./pacman_blue.png",
      description: "Fabriquer des NFT en quelques clics sur MultiversX",
      visual: "",
      link: "https://nftnow.af10.fr",
      support: ""
    },
    {
      id:"tokemon",
      title: "Tokemon",
      version: "1.0",
      icon:"./pacman_pink.png",
      description: "Capturer des NFT cachés sur une carte",
      visual: "https://",
      link: "https://tokemon.af10.fr",
      support: ""
    },
    {
      id:"secretvault",
      title: "Instant Vault",
      version: "1.0",
      icon:"./pacman_orange.png",
      description: "Transférer des NFTs et des coins",
      visual: "https://",
      link: "https://secretvault.af10.fr",
      support: ""
    }
    ]

  open_product(product:any) {
    //this.sel_product=product
    open(product.link,"Product")
  }
}
