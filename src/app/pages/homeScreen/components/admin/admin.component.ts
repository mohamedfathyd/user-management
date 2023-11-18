import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GlobalState } from '../../../../core/global/global-state';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { HomeScreenService } from '../../servcies/homeScreen.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends GlobalState implements OnInit {
  @Output() dateValue = new EventEmitter();
  @ViewChild(DataTableDirective, { static: true })
  private datatableElement: DataTableDirective;
  dtOptions: any = {}; //Table options
  dtTrigger: Subject<any> = new Subject(); //Used for table refresh
  dtInstance: DataTables.Api = null;
  orderTypes = { asc: 'asc', desc: 'desc' };
  order: string = this.orderTypes.desc;
  loading = false;
  usersList;
  constructor(private service: HomeScreenService,private router:Router) {
    super();  
   }

  ngOnInit(): void {
    this.getUsers();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  deleteUser(index) {
    this.usersList.splice(index, 1);
  }
  addUser() {
    this.router.navigate(['/homeScreen/admin/editUser'], { queryParams: { user: {} } })
   }
  editUser(user) {
    this.router.navigate(['/homeScreen/admin/editUser'],
      { queryParams: { user: JSON.stringify(user) } })
  } 
  getUsers() {
    this.loading = true;
    this.usersList = [];
      this.service.getUsers().subscribe(
      (res) => {
          if (res?.data) {
            this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
              dtInstance.destroy();
              this.dtTrigger.next();
            });
          this.usersList = res.data;
        } else
          this.notifier = {
            shown: true,
            msg: res.description,
            subMsg: '',
            type: 'error',
          };
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }
}
