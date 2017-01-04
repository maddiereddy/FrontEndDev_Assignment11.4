import { Component, DoCheck } from '@angular/core'

@Component({
    selector: 'user-list',
    template:
        `<div>
              <label>Select One: </label>
              <select [(ngModel)]="paramName"> 
                <option *ngFor="let user of users" [value]="user.name">{{user.name}}</option>
              </select>
              <br><br>
              <span style="background-color: lightgoldenrodyellow"><b>{{paramName}}</b></span>
              
         </div>`
})

export class UserListComponent implements DoCheck {

    paramName: string

    users = [
        {id: 1, name: 'Parameter'},
        {id: 2, name: 'Lookup'},
        {id: 3, name: 'Dimension'},
        {id: 4, name: 'Integration'},
        {id: 5, name: 'Currency'}
    ]

    ngDoCheck(){
        console.log(`In DoChecks(): ${this.paramName}`)
    }
}

