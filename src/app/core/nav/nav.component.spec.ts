import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';


describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create Nav component', () => {
    expect(component).toBeTruthy();
  });

  it('should display application title as Kanban Board in h3 tag', () => {
    expect(el.textContent).toContain('Kanban Board');
  });
});
