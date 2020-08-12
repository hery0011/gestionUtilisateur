import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(
    private http:HttpClient
  ) { }

  getUtilisateur(){
    return this.http.get<Utilisateur[]>('http://localhost/AngularUtilisateur/api/list.php');
  }

  DeleteUser(id:number){
    return this.http.delete<Utilisateur[]>('http://localhost/AngularUtilisateur/api/delete.php?id=' + id);
  }

  insertion(utilisateur:Utilisateur){
    return this.http.post<Utilisateur[]>('http://localhost/AngularUtilisateur/api/insert.php', utilisateur);
  }

  getById(id:number){
    return this.http.get<Utilisateur[]>('http://localhost/AngularUtilisateur/api/getByid.php?id=' + id);
  }

  updateUtilisateur(utilisateur:Utilisateur){
    return this.http.put('http://localhost/AngularUtilisateur/api/update.php' + '?id=' + utilisateur.id, utilisateur);
  }
}
