import {Component} from "@angular/core"

@Component({
    selector: 'my-app',
    template:'<h1>Helllo {{name}}</h1>'
})
export class AppComponent {

    name: string = "Angular 2"
}