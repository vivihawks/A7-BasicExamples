import { Component } from '@angular/core';

@Component({
    selector: 'ng-for-directive',
    template: `
        <h2>ngFor</h2>

        <div *ngFor="let person of people; let isOdd=odd">
            <span [class.highlight]="isOdd">{{person.name.forename}} {{person.name.surname}}</span>
        </div>
        
        <h3>For Loop</h3>
        
        <span *ngFor="let item of forLoopArray(15); let i=index; let last=last">
            <span>{{i+1}}{{last ? '' : ','}}</span>
        </span>`,
    styles: ['.highlight {background-color: Lavender }']
})
export class NgForComponent {
     people = [
            {id: 1, name: {forename: 'John', surname: 'Doe'}},
            {id: 2, name: {forename: 'John', surname: 'Smith'}},
            {id: 3, name: {forename: 'Peter', surname: 'Scott'}},
            {id: 4, name: {forename: 'Sue', surname: 'Reece'}}
        ];

     trackByPeople(index: number, person: any) {
        return person.id;
    }
     forLoopArray(elements: number): Array<any> {
        return new Array(elements);
    }
}