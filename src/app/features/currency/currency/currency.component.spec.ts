


import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency.component';


describe('CurrencyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
            CurrencyComponent

      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CurrencyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'source'`, () => {
    const fixture = TestBed.createComponent(CurrencyComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('source');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CurrencyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, source');
  });
});