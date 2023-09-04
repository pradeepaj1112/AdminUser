import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

// Import authguardGuard from the appropriate location

describe('authguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authguardGuard(guardParameters[0])); // Pass only the first argument

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

function authguardGuard(route: import("@angular/router").ActivatedRouteSnapshot): any {
  // Your authguardGuard implementation here
  throw new Error('Function not implemented.');
}
