import { Component, Input } from '@angular/core';
import { skills } from '../models/skills.models';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  @Input()
skill! : skills;
}
