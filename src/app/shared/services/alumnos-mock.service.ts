import { Injectable } from '@angular/core';
import { ALUMNOS_MOCK } from '../constantes/constantes';
import { BehaviorSubject, Observable, map, mergeMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlumnosMockService {
  alumnos: any[] = [];
  _alumnos$ = new BehaviorSubject<any>([]);
  alumnos$ = this._alumnos$.asObservable();

  constructor(private http: HttpClient) {
    this.cargarAlumnos();
    //this.alumnos = ALUMNOS_MOCK;
    //this._alumnos$.next(this.alumnos);
  }

  obtener(): Observable<any> {
    return this.alumnos$;
  }

  /*   obtener() {
    return this.alumnos;
  } */

  cargarAlumnos() {
    /*     ALUMNOS_MOCK.pipe(take(1)).subscribe({
      next: (alumnosDB) => {
        console.log('variable alumnosBD', alumnosDB);

        if (alumnosDB) {
          this._alumnos$.next(alumnosDB);
          this.alumnos = alumnosDB;
        }
      },
    }); */
    //http://localhost:3000/users
    this.http.get('http://localhost:3000/users').subscribe((elem) => {
      console.log('data de los usuarios ', elem);
      this._alumnos$.next(elem);
    });
  }

  agregar(alumno: any): void {
    alumno.id = this.alumnos.length + 1;
    console.log('Alumno ', alumno);

    this.alumnos.push(alumno);
    console.log('agregar', this.alumnos);

    //this._alumnos$.next(alumno);
  }

  agregarAlumno(alumno: any): void {
    /*     this._alumnos$.pipe(take(1)).subscribe({
      next: (alumnosActuales) => {
        this._alumnos$.next([
          ...alumnosActuales,
          { ...alumno, id: alumnosActuales.length + 1 },
        ]);
        this.alumnos.push(alumno);
      },
    }); */

    this.http
      .post('http://localhost:3000/users', alumno)
      .pipe(
        mergeMap((alumnoCreado) =>
          this._alumnos$.pipe(
            take(1),
            map((arrayActual: any) => [...arrayActual, alumnoCreado])
          )
        )
      )
      .subscribe((alumnoCreado) => {
        console.log('respuesta del post ', alumnoCreado);
        this._alumnos$.next(alumnoCreado);
      });
  }

  cargarNuevosUsuarios() {
    console.log(' funcion cargarNuevosUsuarios');
    console.log(' variable this.alumnos', this.alumnos);
    this._alumnos$.next(this.alumnos);
  }

  editarAlumno(id: number, alumno: any) {
    console.log('funcion editar alumno variable id', id);
    this.http
      .put('http://localhost:3000/users/' + id, alumno)
      .subscribe((alumnoNuevo) => {
        console.log('Alumno nuevo ', alumnoNuevo);
      });
    this.cargarAlumnos();
    this.alumnos$.pipe(take(1)).subscribe({
      next: (alumnosActuales) => {
        console.log(
          'funcion editar alumno variable alumno actuales',
          alumnosActuales
        );
        this._alumnos$.next(
          alumnosActuales.map((alumnoActual: any) =>
            alumnoActual.id === id
              ? { ...alumnoActual, ...alumno }
              : alumnoActual
          )
        );
        //this.alumnos.push(alumno);
      },
    });
  }

  eliminarAlumno(id: number): void {
    this.http
      .delete('http://localhost:3000/users/' + id)
      .pipe(
        mergeMap((responseUserDelete) =>
          this._alumnos$.pipe(
            take(1),
            map((arrayActual) => arrayActual.filter((u: any) => u.id !== id))
          )
        )
      )
      .subscribe((arrayActualizado) => {
        console.log('Eliminar alumno ', arrayActualizado);
        this._alumnos$.next(arrayActualizado);
      });
    /*     this._alumnos$.pipe(take(1)).subscribe({
      next: (alumnoActual) => {
        this._alumnos$.next(alumnoActual.filter((u: any) => u.id !== id));
      },
    }); */
  }
}
