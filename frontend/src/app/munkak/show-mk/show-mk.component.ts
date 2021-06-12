import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-mk',
  templateUrl: './show-mk.component.html',
  styleUrls: ['./show-mk.component.css']
})
export class ShowMkComponent implements OnInit {

  constructor(private service:SharedService) { }

  MunkakList:any=[];


  ModalTitle:string;
  ActivateAddEditMkComp:boolean=false;
  mk:any;

  ngOnInit(): void {
    this.refreshMkList();

  }

  addClick(){
    this.mk={
      MunkaID:0,
      MunkaNeve:""
       
    
    }
    this.ModalTitle="Új munka hozzáadása";
    this.ActivateAddEditMkComp=true;
  }

  editClick(item){
    this.mk=item;
    this.ModalTitle="Munka adatainak módosítása";
    this.ActivateAddEditMkComp=true;
  }

  deleteClick(item){
    if(confirm('Biztos, hogy törli a munkát?')){
        this.service.deleteMunkakList(item.MunkaID).subscribe(data=>{
          alert(data.toString());
          this.refreshMkList();
        })
    }
  }

  closeClick(){
    this.ActivateAddEditMkComp=false;
    this.refreshMkList();
  }

  refreshMkList(){
    this.service.getMkList().subscribe(data=>{
      this.MunkakList=data;

    });
  }

}

