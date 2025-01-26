import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

const API_KEY = 'fca_live_oBqkD5D9exYe2FYLDl3l3KCT2TyGEyBAdd7QpMx2'

export class CurrencyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clone = req.clone({
            setParams: {
                'apikey': API_KEY
            }
        });

        return next.handle(clone);
    }

}