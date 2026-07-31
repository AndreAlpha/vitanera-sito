import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('crea il guscio dell’applicazione', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  /**
   * L'avvertenza non è più ripetuta a ogni schermata — la barra permanente in
   * cima e la modale di primo accesso sono state tolte — ma dal guscio deve
   * restare sempre raggiungibile: il piè di pagina la riassume e rimanda al
   * testo completo, e la barra laterale porta alle tre pagine di trasparenza.
   */
  it('l’avvertenza resta raggiungibile da ogni schermata', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;

    expect(host.textContent ?? '').toContain('non sono consulenza finanziaria');
    expect(host.querySelector('a[href="/avvertenze"]')).toBeTruthy();
  });

  it('non ripropone la modale di presa visione', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('[role="dialog"]')).toBeNull();
  });
});
