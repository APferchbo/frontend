import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skills } from 'src/app/model/skills';
import { ImgService } from 'src/app/service/img.service';
import { skillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  hys: skills = null;

  constructor(private shys: skillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imgService: ImgService) { }

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

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hys.img = this.imgService.url
    this.shys.update(id, this.hys).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Habilidad");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "hys" + id
    this.imgService.uploadImage($event, name)
  }
}