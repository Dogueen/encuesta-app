import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Encuesta } from '../models/Encuesta/Encuesta.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-respuestas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './respuestas.component.html',
  styleUrl: './respuestas.component.scss'
})
export class RespuestasComponent {
  encuestas: Encuesta[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Encuesta[]>('http://127.0.0.1:5000/encuestas')
      .subscribe(data => {
        this.encuestas = data;
      }, error => {
        console.error('Error al obtener las encuestas', error);
      });
  }

}
