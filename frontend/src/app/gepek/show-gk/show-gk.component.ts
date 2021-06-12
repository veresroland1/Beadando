import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-gk',
  templateUrl: './show-gk.component.html',
  styleUrls: ['./show-gk.component.css']
})
export class ShowGkComponent implements OnInit {

  constructor(private service:SharedService) { }

  GepekList:any=[];


  ModalTitle:string;
  ActivateAddEditGkComp:boolean=false;
  gk:any;

  ngOnInit(): void {
    this.refreshGkList();

  }

  addClick(){
    this.gk={
      GepId:0,
      GepNev:""
       
    
    }
    this.ModalTitle="Új gep hozzáadása";
    this.ActivateAddEditGkComp=true;
  }

  editClick(item){
    this.gk=item;
    this.ModalTitle="Gép módosítása";
    this.ActivateAddEditGkComp=true;
  }

  deleteClick(item){
    if(confirm('Biztos, hogy törli a gépet?')){
        this.service.deleteGepekList(item.GepId).subscribe(data=>{
          alert(data.toString());
          this.refreshGkList();
        })
    }
  }

  closeClick(){
    this.ActivateAddEditGkComp=false;
    this.refreshGkList();
  }

  refreshGkList(){
    this.service.getGkList().subscribe(data=>{
      this.GepekList=data;

    });
  }

}

