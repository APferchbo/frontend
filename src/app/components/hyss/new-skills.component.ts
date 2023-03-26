import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skills } from 'src/app/model/skills';
import { ImgService } from 'src/app/service/img.service';
import { skillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  hys: skills = null;
  
  nomSH: string;
  porSH: number;
  imgSH: string;

  constructor(private shys: skillsService,private activatedRouter: ActivatedRoute, private router: Router, public imgService: ImgService) { }

  ngOnInit() { }

  onCreate(): void {
    const hys = new skills(this.nomSH, this.porSH, this.imgSH);
    this.hys.img = this.imgService.url
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
  uploadimage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "hys" + id
    this.imgService.uploadImage($event, name)
  }
}