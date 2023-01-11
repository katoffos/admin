import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { AdminModel } from '../admin-dashboard.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  formValue !: FormGroup;
  adminModelObj : AdminModel = new AdminModel();
  api: any;
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      emailid : [''],
      password : [''],
      profilephoto : [''],
      dateofbirth : [''],
      phonenumber : ['']
    })
  }

  postAdminDetails(){
    this.adminModelObj.emailid = this.formValue.value.emailid;
    this.adminModelObj.password = this.formValue.value.password;
    this.adminModelObj.profilephoto = this.formValue.value.profilephoto;
    this.adminModelObj.dateofbirth = this.formValue.value.dateofbirth;
    this.adminModelObj.phonenumber = this.formValue.value.phonenumber;
    
    this.api.postAdmin(this.adminModelObj)
    .subscribe((res: any)=>{
      console.log(res);
      alert("Employee added successfully")
    },
      (    _err: any)=>{
      alert("Something Went Wrong");
    })

  }

}
