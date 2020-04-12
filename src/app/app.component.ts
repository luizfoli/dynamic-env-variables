import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private webConfig;
  public urlApi: string;
  public company: string;


  constructor(private config: ConfigService) {
  }

  ngOnInit(): void {
    this.webConfig = this.config.getWebConfig();

    this.urlApi = this.webConfig.apiUrl;
    this.company = this.webConfig.company;
  }




  title = 'builded-var';




}
