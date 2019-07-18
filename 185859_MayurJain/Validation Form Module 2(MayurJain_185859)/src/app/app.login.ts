import { Component } from "@angular/core";


@Component({
    selector:'login-com',
    templateUrl:'login.html'
})

// Login Component
export class LoginComponent{

    name:string;
    address:string;
    pincode:number;
    status:string="INVALID"; //initially status is false i.e. INVALID
    array:any[]=[]; // for storing the form enteries for future use
    addData(data){
        this.array.push({Name:this.name, Address:this.address, PinCode:this.pincode});
        // when the data is entered the status changes to valid
        this.status="VALID";
    }
    
}

