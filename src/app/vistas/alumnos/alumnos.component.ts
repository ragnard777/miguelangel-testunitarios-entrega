import { Component, OnInit } from '@angular/core';
import { AlumnosMockService } from 'src/app/shared/services/alumnos-mock.service';
import { AbmAlumnosComponent } from './componentes/abm-alumnos/abm-alumnos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  //alumnos: Observable<any[]>;
  alumnos: any;
  hoy = new Date();

  constructor(
    private _alumnosService: AlumnosMockService,
    private matDialog: MatDialog
  ) {
    console.log('Paso por el constructor de alumnos.component');
    //this._alumnosService.cargarNuevosUsuarios();
    this.alumnos = this._alumnosService.obtener();
    //this.alumnos = this._alumnosService.cargarAlumnos();
  }

  ngOnInit(): void {
    this.alumnos = this._alumnosService.obtener();
  }

  crearAlumno(): void {
    this.matDialog
      .open(AbmAlumnosComponent)
      .afterClosed()
      .subscribe({
        next: (v) => {
          if (v) {
            this._alumnosService.agregarAlumno({
              nombre: v.nombre,
              email: v.email,
              password: v.password,
              alias: v.alias,
            });
          }
        },
      });
  }

  onEliminarAlumno(alumnoToDelete: any): void {
    if (confirm(`¿Está seguro de eliminar a ${alumnoToDelete.name}?`)) {
      this._alumnosService.eliminarAlumno(alumnoToDelete.id);
    }
  }

  onEditarAlumno(alumnoToEdit: any): void {
    this.matDialog
      .open(AbmAlumnosComponent, {
        data: alumnoToEdit,
      })
      .afterClosed()
      .subscribe({
        next: (userUpdated) => {
          console.log(userUpdated);
          if (userUpdated) {
            console.log('alumno actualizar', userUpdated);
            this._alumnosService.editarAlumno(alumnoToEdit.id, userUpdated);
          }
        },
      });
  }
}
