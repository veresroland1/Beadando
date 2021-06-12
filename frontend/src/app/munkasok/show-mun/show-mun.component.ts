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

  MunkasIDFilter:string="";
  MunkasNeveFilter:string="";
  MunkasSzakkepzettsegFilter:string="";
  MunkasOraberFilter:string="";
  MunkaNeveFilter:string="";
  MunkasokListWithoutFilter:any=[];

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
    //console.log(item);
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
      this.MunkasokListWithoutFilter=data;
    });
  }

  FilterFn(){
    var MunkasIDFilter = this.MunkasIDFilter;
    var MunkasNeveFilter = this.MunkasNeveFilter;
    var MunkasSzakkepzettsegFilter = this.MunkasSzakkepzettsegFilter;
    var MunkasOraberFilter = this.MunkasOraberFilter;
    var MunkaNeveFilter = this.MunkaNeveFilter;

    this.MunkasokList = this.MunkasokListWithoutFilter.filter(function (el){
      return el.MunkasID.toString().toLowerCase().includes(
        MunkasIDFilter.toString().trim().toLowerCase()
      )&&
        el.MunkasNeve.toString().toLowerCase().includes(
        MunkasNeveFilter.toString().trim().toLowerCase()
      )&&
        el.MunkasSzakkepzettseg.toString().toLowerCase().includes(
        MunkasSzakkepzettsegFilter.toString().trim().toLowerCase()
      )&&   
        el.MunkasOraber.toString().toLowerCase().includes(
        MunkasOraberFilter.toString().trim().toLowerCase()
      )&&
        el.MunkaNeve.toString().toLowerCase().includes(
        MunkaNeveFilter.toString().trim().toLowerCase()
    )

    });
  }
    sortResult(prop,asc){
      this.MunkasokList = this.MunkasokListWithoutFilter.sort(function(a,b){
        if(asc){
            return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
        }else{
          return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
        }
      })
  }

}
