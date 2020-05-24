import { Component, OnInit } from '@angular/core';
import { DrawService } from '../../services/draw/draw.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gd-draw-dashboard-ui',
  templateUrl: './draw-dashboard-ui.component.html',
  styleUrls: ['./draw-dashboard-ui.component.scss']
})
export class DrawDashboardUiComponent implements OnInit {

  public testData$: Observable<string>;
  constructor(
    public drawService: DrawService
  ) { }

  ngOnInit(): void {
    this.testData$ = this.drawService.getTestText();
  }

}
