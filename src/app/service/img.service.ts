import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, list } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  url: string = "";

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.getImages();
  }

  uploadImage($event: any, name: string) {
    const file = $event.target.files[0]
    console.log(file);
    const imgref = ref(this.storage, `img/`+name)
    uploadBytes(imgref, file)
      .then(response => {this.getImages()})
      .catch(error => console.log(error)
      )

  }

  getImages() {
    const imgref = ref(this.storage, `img`)
    list(imgref)
      .then(async Response => {for (let item of Response.items) {
          this.url = await getDownloadURL(item);
          console.log("La URL es: " + this.url)
        }
      })
      .catch(error => console.log(error))
  }
}
