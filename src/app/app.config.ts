import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptors';
import { TestPipe } from './core/pipes/test.pipe';
import { TestDirective } from './core/directives/test.directive';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    importProvidersFrom(TestPipe, TestDirective),
  ]
};
