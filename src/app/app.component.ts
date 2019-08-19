import { Component } from '@angular/core';
import { APIService, CreateMyTestModelInput } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'awsappsync';

  constructor(apiService: APIService) {
    const allData = apiService.CreateMyTestModel(<CreateMyTestModelInput>{'title': 'Hello, world!'}).then(
      (response) => {
        console.log('response >>>', response);
      }
    );
  }
}
