import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from '../models/subscription';
import { SubscriptionService } from '../services/subscription.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  
  subscriptions: Subscription[];
  editData: Subscription;
  editForm: Boolean;
  newForm: Boolean;
  course_id: String;
  subject_id: String;

  constructor(private router : Router, private subscriptionService : SubscriptionService,  private toastr: ToastrService, private route: ActivatedRoute) {
    this.course_id =  this.route.snapshot.paramMap.get('id');
    this.subject_id =  this.route.snapshot.paramMap.get('subject_id');
   }

  ngOnInit() {
    this.editForm = false;
    this.newForm = false;
    this.getData();
  }

  getData() {
    this.subscriptionService.getUsersFromData(this.subject_id).subscribe(res => {
      this.subscriptions = res;
    });
  }

  showEditForm(editData : Subscription) {
    this.editForm = true;
    this.editData = editData;
    this.newForm = false;
  }

  showAddForm() {
    this.editForm = false;
    this.newForm = true;
  }

  saveData(form: NgForm) {
    this.subscriptionService.newRecord(form.value).subscribe(data => {
      if(data.status == 200){
        this.newForm = false;
        this.editData = null;
        this.toastr.success('Success', 'Inserted a new entry', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  updateData(form: NgForm) {
    var subject_subscription_id = form.value.subject_subscription_id;
    console.log(subject_subscription_id)
    this.subscriptionService.updateRecord(form.value, subject_subscription_id).subscribe(data => {
      console.log("ss");
      if(data.status == 200){
        this.editForm = false;
        this.editData = null;
        this.toastr.success('Success', 'Subscription table updated', { timeOut: 3000 });
        this.ngOnInit();
      }
      else{
        console.log("Following Error - ");
        console.log(data.body);
        this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
      }
    });
  }

  removeData(subscription : Subscription) {
    if (confirm('Are you sure you want to delete this data from the database?')) {
      var subject_subscription_id = subscription.subject_subscription_id;
      this.subscriptionService.deleteRecord(subject_subscription_id).subscribe(data => {
        if(data.status == 200){
          this.cancelEditForm();
          this.cancelAddForm();
          this.toastr.success('Success', 'Subscription Deleted', { timeOut: 3000 });
          this.ngOnInit();
        }
        else{
          console.log("Following Error - ");
          console.log(data.body);
          this.toastr.error('Error Occured', 'See browsers console for error message', { timeOut: 3000 });
        }
      });
    }
  }

  cancelEditForm() {
    this.editForm = false;
  }

  cancelAddForm() {
    this.newForm = false;
  }

  redirectBack(){
    this.router.navigate(['/course', this.course_id, 'subject']);
  }
}