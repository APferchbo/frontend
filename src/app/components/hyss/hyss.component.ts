import { Component, OnInit } from '@angular/core';
import { skills } from 'src/app/model/skills';
import { skillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hyss',
  templateUrl: './hyss.component.html',
  styleUrls: ['./hyss.component.css']
})
export class HyssComponent implements OnInit {
  skills: skills [] = [];

  constructor(private shys: skillsService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHys();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHys(): void {
    this.shys.lista().subscribe(data => { this.skills = data; })
  }
  delete(id?: number) {
    if (id != undefined) {
      this.shys.delete(id).subscribe(data => {
        this.cargarHys();
      }, err => {
        alert("No se pudo borrar la educacion");
      }
      )
    }
  }
}