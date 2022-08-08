import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'projects/astro-pujeets-web-admin/src/environments/environment';
import { Subscription } from 'rxjs';
import { ConsultantService } from '../../../services/consultant.service';

@Component({
  selector: 'app-consultant-list',
  templateUrl: './consultant-list.component.html',
  styleUrls: ['./consultant-list.component.scss'],
})
export class ConsultantListComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  baseUrl = environment.baseUrl;
  consultants: any = [];

  constructor(private consultantService: ConsultantService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    const subscription =
      this.consultantService.getConsultants.valueChanges.subscribe(
        ({ data, errors }) => {
          console.log(data);
          this.consultants = data?.getConsultants;
        }
      );
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
