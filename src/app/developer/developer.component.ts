
import { Component } from '@angular/core';
import { developers } from '../models/developer.models';
import { skills } from '../models/skills.models';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  developers: developers = new developers('Da', 'Mat', 43, 'homme', 'et', [
    new skills('toto', '.)', 'aa@com'),
  ]);
}

