import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG } from 'app/app.config';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incident-pdf',
  templateUrl: './incident-pdf.component.html',
  styleUrls: ['./incident-pdf.component.css']
})
export class IncidentPdfComponent implements OnInit {

  pdfEndpoint: string;

  /**
   * Constructor
   *
   * @param config APP_CONFIG
   * @param route ActivatedRoute
   */
  constructor(@Inject(APP_CONFIG) private config,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.pdfEndpoint = this.config.INCIDENT_DATA_SERVICE_URL + this.route.snapshot.params.id + '/pdf';
  }
} 
