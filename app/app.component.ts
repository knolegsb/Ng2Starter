import { Component } from '@angular/core';
import {WelcomeComponent} from './welcome/welcome.component'

@Component({
  selector: 'my-app',
  template: `<h1>{{pageTitle}}</h1>
            <div>App Component Test</div>
            <welcome></welcome>`
})
export class AppComponent { 
  pageTitle: string = "Dev Book Store";

  showBook(): void{

  }
}
