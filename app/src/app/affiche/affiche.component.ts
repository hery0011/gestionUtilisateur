import { Component, OnInit } from '@angular/core';

import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {
  utilisateur:Utilisateur[];
  private _id: any;
  


  constructor(
    private _utilisateurService:UtilisateurService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this._utilisateurService.getUtilisateur().subscribe((data:Utilisateur[])=>{
      this.utilisateur = data;
      console.log(this.utilisateur);
    });
  }

  detele(utilisateur:Utilisateur){
    this._utilisateurService.DeleteUser(utilisateur.id).subscribe(data=>{
      this.utilisateur = this.utilisateur.filter(u => u !== utilisateur);
    });
  }

  edit(utilisateur:Utilisateur){
    this._id = utilisateur.id;
    this.router.navigate(['edit/' + this._id]);
  }



}
