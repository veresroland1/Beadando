import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';



@Component({
  selector: 'app-show-mun',
  templateUrl: './show-mun.component.html',
  styleUrls: ['./show-mun.component.css']
})
export class ShowMunComponent implements OnInit {

  constructor(private service:SharedService) { }

  MunkasokList:any=[];


  ModalTitle:string;
  ActivateAddEditMunComp:boolean=false;
  mun:any;

  ngOnInit(): void {
    this.refreshMunList();

  }

  addClick(){
    this.mun={
      MunkasID:0,
      MunkasNeve:"",
      MunkasSzakkepzettseg:"",
      MunkasOraber:"",
      Kep:"anonymous.png",
      MunkaNeve:""   
    
    }
    this.ModalTitle="Új munkás hozzáadása";
    this.ActivateAddEditMunComp=true;
  }

  editClick(item){
    console.log(item);
    this.mun=item;
    this.ModalTitle="Munkás adatainak módosítása";
    this.ActivateAddEditMunComp=true;
  }

  deleteClick(item){
    if(confirm('Biztos, hogy törli a munkást?')){
        this.service.deleteMunkasokList(item.MunkasID).subscribe(data=>{
          alert(data.toString());
          this.refreshMunList();
        })
    }
  }

  closeClick(){
    this.ActivateAddEditMunComp=false;
    this.refreshMunList();
  }

  refreshMunList(){
    this.service.getMunList().subscribe(data=>{
      this.MunkasokList=data;

    });
  }

}
