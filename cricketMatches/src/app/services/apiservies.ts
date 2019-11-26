
import { Injectable } from '@angular/core/'; 
 // import { BehaviorSubject } from 'rxjs/BehaviorSubject';
 import { BehaviorSubject } from 'rxjs';

 import { HttpClientModule, HttpClient }    from '@angular/common/http';
 import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { query } from '@angular/animations';
@Injectable()
export class ApiservicesService {
  sharedata:any;
  headers = new Headers();

  url="http://0.0.0.0:8000/"
  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

  constructor(public http:HttpClient) { 

  }

  getAllTeams(){
     return this.http.get(this.url+`add/team`)
  }
  saveUserData(data:any){
    return this.http.post(this.url+`add/team`,data)
  }
  savePlayersData(data:any){
    return this.http.post(this.url+`add/player`,data)
  }
  getPlayersByTeam(id:number){
    return this.http.get(this.url+`playerlist/by/team/${id}`)
  }
  createMatch(data:any){
    return this.http.post(this.url+`create/match`,data)
  }
  getAllMatches(){
    return this.http.get(this.url+`allmatchlist`)
  }
  matchDataSave(data){
    return this.http.post(this.url+`match/points/winner/add`,data)
  }
  getWinnersList(){
    return this.http.get(this.url+`winner/points/match`)
  }
}
