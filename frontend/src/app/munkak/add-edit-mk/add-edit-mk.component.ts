import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-mk',
  templateUrl: './add-edit-mk.component.html',
  styleUrls: ['./add-edit-mk.component.css']
})
export class AddEditMkComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() mk:any;
  MunkaID:string;
  MunkaNeve:string;
 
  
 

  ngOnInit(): void {
    this.MunkaID=this.mk.MunkaID;
    this.MunkaNeve=this.mk.MunkaNeve;
    
  }

  addMunkak(){
      var val = {MunkaID:this.MunkaID,
                MunkaNeve:this.MunkaNeve
           };
      this.service.AddMunkakList(val).subscribe(res=>{
        alert(res.toString());
      });
  }

  updateMunkak(){
    var val = {MunkaID:this.MunkaID,
      MunkaNeve:this.MunkaNeve
      };
this.service.UpdateMunkakList(val).subscribe(res=>{
alert(res.toString());
});

  }

}
