import { PreloadingStrategy, Route } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable()

export class CustomPreloadingStrategy implements PreloadingStrategy{
    preload(route: Route, load:() => Observable<any>): Observable<any>{
        if(route.data && route.data['preload']){
            console.log("Preload Path is : " + route.path);
            return load();
        } else {
            return of(null);
        }
    }
}
