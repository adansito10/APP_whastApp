import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {
  profileImage: string = 'https://img.redbull.com/images/q_auto,f_auto/redbullcom/2013/12/12/1331624330379_2/neymar-del-barcelona-besa-la-pelota-despu%C3%A9s-de-anotar-tres-goles-frente-al-celtic-en-la-liga-de-campeones..jpg';

  constructor() {}

  ngOnInit() {}

  async changeProfilePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt,
      });

      if (image && image.dataUrl) {
        this.profileImage = image.dataUrl; 
      }
      
    } catch (error) {
      console.error('Error al cambiar la foto de perfil:', error);
    }
  }
}
