import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-mun',
  templateUrl: './add-edit-mun.component.html',
  styleUrls: ['./add-edit-mun.component.css']
})
export class AddEditMunComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() mun:any;
  MunkasID:string;
  MunkasNeve:string;
  MunkasSzakkepzettseg:string;
  MunkasOraber:string;
  Kep:string;
  PhotoFilePath:string;
  MunkaNeve:string;
  
  MunkasokList:any[];

  ngOnInit(): void {
    this.loadMunkasokList();
  }

  loadMunkasokList(){
    this.service.getAllMunkaNeve().subscribe((data:any)=>{
      this.MunkasokList=data;

    this.MunkasID=this.mun.MunkasID;
    this.MunkasNeve=this.mun.MunkasNeve;
    this.MunkasSzakkepzettseg=this.mun.MunkasSzakkepzettseg;
    this.MunkasOraber=this.mun.MunkasOraber;
    this.Kep=this.mun.Kep;
    this.PhotoFilePath=this.service.PhotoUrl+this.Kep;
    this.MunkaNeve=this.mun.MunkaNeve;
    });
  }

  addMunkasok(){
      var val = {MunkasId:this.MunkasID,
                MunkasNeve:this.MunkasNeve,
                MunkasSzakkepzettseg:this.MunkasSzakkepzettseg,
                MunkasOraber:this.MunkasOraber,
                Kep:this.Kep,
                MunkaNeve:this.MunkaNeve};
      this.service.AddMunkasokList(val).subscribe(res=>{
        alert(res.toString());
      });
  }

  updateMunkasok(){
    var val = {MunkasId:this.MunkasID,
      MunkasNeve:this.MunkasNeve,
      MunkasSzakkepzettseg:this.MunkasSzakkepzettseg,
      MunkasOraber:this.MunkasOraber,
      Kep:this.Kep,
      MunkaNeve:this.MunkaNeve};
this.service.UpdateMunkasokList(val).subscribe(res=>{
alert(res.toString());
});

  }

  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.Kep=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.Kep;
    })
  }

}
