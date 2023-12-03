import { Component } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Adicione o cabeçalho Content-Type com charset UTF-8
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
    return next.handle(request);
  }
  title = 'shopModelOne';
}
