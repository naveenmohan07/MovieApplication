import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  getAuthDetails(name: string, pass: string): any{
    const userName = 'naveen';
    const passWord = 'naveen';
    if ((userName === name) && (passWord === pass)) {
      console.log('loged');
    }
  }
}
