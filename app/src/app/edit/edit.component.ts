import { Component, OnInit } from '@angular/core';

import { UtilisateurService } from '../utilisateur.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Utilisateur } from '../utilisateur';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  addForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private _utilisateurService: UtilisateurService,
    private router:Router,
    private routes:ActivatedRoute
  ) { }

  ngOnInit(): void {

    const routeParams = this.routes.snapshot.params;

    this._utilisateurService.getById(routeParams.id).subscribe((data:any)=>{
      this.addForm.patchValue(data);
    });

   this.addForm = this.formBuilder.group({
      id:[''],
      nom:['', Validators.required],
      prenom:['',Validators.required],
      mail:['', Validators.required],
      password:['', Validators.required],
    });
  }

  update(){
    this._utilisateurService.updateUtilisateur(this.addForm.value).subscribe(()=>{
    this.router.navigate(['affiche/']);
  },
  error=>{
    alert(error);
  });
}

}
