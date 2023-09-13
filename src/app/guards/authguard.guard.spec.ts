import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';



describe('authguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authguardGuard(guardParameters[0])); 
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

function authguardGuard(route: import("@angular/router").ActivatedRouteSnapshot): any {

  throw new Error('Function not implemented.');
}
