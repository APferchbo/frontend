import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nomS: string;
  porS: number;

  constructor(private shys: SkillsService, private router: Router) { }

  ngOnInit() { }

  onCreate(): void {
    const hys = new Skills(this.nomS, this.porS);
    this.shys.save(hys).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate([''])
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}