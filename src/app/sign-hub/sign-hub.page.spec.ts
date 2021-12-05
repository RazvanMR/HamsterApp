import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignHubPage } from './sign-hub.page';

describe('SignHubPage', () => {
  let component: SignHubPage;
  let fixture: ComponentFixture<SignHubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignHubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignHubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
