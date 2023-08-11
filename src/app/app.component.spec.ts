import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  //deberia aprobar
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const variable = fixture.componentInstance;
    expect(variable.variableTest).toBeFalse();
  });

  //pass de test
  it(`should have as title 'test-unitarios'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-unitarios');
  });

  //deberia fallar
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const variable = fixture.componentInstance;
    expect(variable.otraVariablePrueba).toBeFalse();
  });

  /*   it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'test-unitarios app is running!'
    );
  }); */
});
