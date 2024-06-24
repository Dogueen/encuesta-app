import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.scss'
})
export class EncuestaComponent {
  encuesta = {
    nombre: '',
    puesto: '',
    area: '',
    programa: '',
    telemedicina: '',
    quedarse: '',
    pagar: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://127.0.0.1:5000/subir_encuesta', this.encuesta)
      .subscribe(response => {
        console.log('Encuesta enviada exitosamente', response);
      }, error => {
        console.error('Error al enviar la encuesta', error);
      });
  }

}
