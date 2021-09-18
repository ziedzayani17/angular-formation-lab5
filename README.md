# LAB 3
## _Les points à voir :_

- Les formulaires

<br/>

## _prérequis :_

- Récuperer le code du LAB1 (https://github.com/ziedzayani17/angular-formation-lab4.git)

<br/>
<br/>

### 1. Créer une nouveau component *RegisterMovieComponent*

```sh
ng generate component register-movie
```
>Nous allons utiliser FormControl et FormGroup, pour construire un formulaire dans le code.<br>
>On va utiliser la classe utilitaire *FormBuilder* , on doit l'injecter dans le composant concerné

```js
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-movie',
  templateUrl: './register-movie.component.html',
  styleUrls: ['./register-movie.component.css']
})
export class RegisterMovieComponent implements OnInit {

  constructor(fb: FormBuilder) {}

  ngOnInit(): void {}

}
```


### 2. Importer *ReactiveFormsModule*  dans le module racine

<br>

```js
 imports: [
    BrowserModule, RouterModule.forRoot(ROUTES),ReactiveFormsModule
  ],
```

<br>


### 3. Créer un formGroup avec les formControl en utilisant la méthode **fb.group({})**

```js

  movieForm : FormGroup;

  constructor(fb: FormBuilder) {

    this.movieForm = fb.group({
      name: '',
      pays: '',
      category: '',
      releaseDate: '',
    });

   }
```
<br>

### 3. Intégration du formulaire dans le template

### 3.1 Associer le *formGroup* avec la balise *form* et déclarer la méthode *submit* 

<br>

```html
<form class="ui form" [formGroup]="movieForm" (ngSubmit)="registerMovie()">
```

### 3.2 Associer les *formControl* de *formGroup* aux champs dans le template

<br>


```html
  <input type="text"  placeholder="Nom de film" formControlName="name" >
```

### 3.3 Ajouter la méthode *registerMovie()* 

```js
 registerMovie():void{
    console.log(this.movieForm.value);
  }
```

Voici le code html complet

```html
<div style="margin-top: 20px;margin-left: auto;margin-right: auto;width: 70%;" class="ui teal segment">
<form class="ui form" [formGroup]="movieForm" (ngSubmit)="registerMovie()">
    <div class="field">
      <label>Nom</label>
      <input type="text"  placeholder="Nom de film" formControlName="name" >
    </div>
    <div class="field">
      <label>Catégorie</label>
      <input type="text"  placeholder="Catégorie de film" formControlName="category">
    </div>
    <div class="field">
        <label>Pays</label>
        <input type="text"  placeholder="Pays" formControlName="pays">
      </div>
    <div class="field">
        <label>Date de sortie</label>
        <input type="text"  placeholder="Date de sortie" formControlName="releaseDate">
    </div>
    <button style="float: right;" class="ui submit button" type="submit">Enregistrer</button>
  </form>
</div>
```


### 4. Validation

### 4.2 Ajouter la validation de *formControl* à la déclaration

```js
name: fb.control('',[Validators.required, Validators.minLength(4)]),
```

### 4.3 Ajouter la validation de *formControl* à la déclaration
```html
<div class="field">
      <label>Nom</label>
      <input type="text"  placeholder="Nom de film" formControlName="name" >
    </div>
    <div *ngIf="movieForm.controls.name.touched && movieForm.controls.name.errors"> 
        <div class="ui error message" *ngIf="movieForm.controls.name.hasError('required')">
            <p>Le champ nom est obligatoire</p>
        </div>
        <div class="ui error message" *ngIf="movieForm.controls.name.errors.minlength">
            <p>Le champ nom doit contenir au minumun 4 characteres </p>
        </div>
    </div>
```
