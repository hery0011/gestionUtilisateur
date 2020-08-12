import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { Utilisateur } from '../utilisateur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  ajout:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private _utilisateurService:UtilisateurService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.ajout = this.formBuilder.group({
      nom:['', Validators.required],
      prenom:['',Validators.required],
      mail:['', Validators.required],
      password:['', Validators.required],
    });
  }

  submit(){
    this._utilisateurService.insertion(this.ajout.value).subscribe(data=>{
      this.router.navigate(['/affiche']);
    });
  }

}
