import { Observable, delay, of } from 'rxjs';

export const ALUMNOS_MOCK: Observable<any> = of([
  {
    id: 1,
    nombre: 'Miguel',
    alias: 'ElFlaco',
    email: 'mlugo@mail.com',
    password: '123456',
  },
  {
    id: 2,
    nombre: 'Miguelangel',
    alias: 'ElGanador',
    email: 'mike@mail.com',
    password: '123456',
  },
  {
    id: 3,
    nombre: 'Josue',
    alias: 'ElProfesor',
    email: 'pjosue@mail.com',
    password: '123456',
  },
  {
    id: 4,
    nombre: 'Nathalie',
    alias: 'LaIngeniero',
    email: 'Nfebres@mail.com',
    password: '123456',
  },
  {
    id: 5,
    nombre: 'Jesus',
    alias: 'ElGamer',
    email: 'jgamer@mail.com',
    password: '123456',
  },
]).pipe(delay(2000));
