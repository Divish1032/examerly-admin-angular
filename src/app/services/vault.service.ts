import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VaultService {
  apiDomain : String
  constructor() {
    this.apiDomain = "http://ec2-13-233-227-222.ap-south-1.compute.amazonaws.com:3000"
    //this.apiDomain = "//localhost:3000/admin"
    
   }
}
