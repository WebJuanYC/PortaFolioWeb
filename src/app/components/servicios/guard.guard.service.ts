import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutenticacionService } from './autenticacion.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private autenticacionService: AutenticacionService, private ruta: Router){ 
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser = this.autenticacionService.UsuarioAutenticado;
      if (currentUser && currentUser.id) {
      return true;
  }
  else {   
    this.ruta.navigate(['/']);
    return false;  
 }
  
}

}
