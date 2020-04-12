import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlatformLocation } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private webConfig: any;

  constructor(
    private plat: PlatformLocation,
    private http: HttpClient) { }

  public loadConfig(): Promise<any> {
    return this.http.get("./assets/config/webconfig.json")
      .toPromise()
      .then((resp) => this.webConfig = resp);
  }

  public getWebConfig(): any {
    return this.webConfig;
  }
}
