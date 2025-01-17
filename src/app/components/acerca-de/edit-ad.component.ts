import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImgService } from 'src/app/service/img.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.css']
})
export class EditAdComponent implements OnInit {
  per: persona = null;

  constructor(private sper: PersonaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imgService: ImgService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sper.detail(id).subscribe(data => {
      this.per = data;
    }, err => {
      alert("error al modificar persona");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.per.img = this.imgService.url
    this.sper.update(id, this.per).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil" + id
    this.imgService.uploadImage($event, name)
  }
}
