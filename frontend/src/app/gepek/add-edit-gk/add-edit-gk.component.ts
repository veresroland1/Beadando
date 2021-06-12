import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-gk',
  templateUrl: './add-edit-gk.component.html',
  styleUrls: ['./add-edit-gk.component.css']
})
export class AddEditGkComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() gk:any;
  GepId:string;
  GepNev:string;
 
  
 

  ngOnInit(): void {
    this.GepId=this.gk.GepId;
    this.GepNev=this.gk.GepNev;
    
  }

  addGepek(){
      var val = {GepId:this.GepId,
                GepNev:this.GepNev
           };
      this.service.AddGepekList(val).subscribe(res=>{
        alert(res.toString());
      });
  }

  updateGepek(){
    var val = {GepId:this.GepId,
      GepNev:this.GepNev
      };
this.service.UpdateGepekList(val).subscribe(res=>{
alert(res.toString());
});

  }

}
