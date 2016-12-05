import {Component} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'welcome',
    templateUrl: 'welcome.component.html',
    //styles: ['.byline{color:green;}']
    styleUrls: ['welcome.component.css']
})

export class WelcomeComponent {
    pageTitle: string = "Welcome";
}