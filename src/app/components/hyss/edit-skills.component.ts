import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  hys : Skills = null;
  
    constructor(private shys: SkillsService,
       private activatedRouter: ActivatedRoute,
        private router: Router) {}
  
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.shys.detail(id).subscribe(data => {
        this.hys = data;
      }, err => {
        alert("error al modificar Habilidad");
        this.router.navigate(['']);
      }
      )
    }
  
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.shys.update(id, this.hys).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
          alert("Error al modificar Habilidad");
          this.router.navigate(['']);
        }
      )
    }
  }