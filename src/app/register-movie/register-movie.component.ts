import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register-movie',
  templateUrl: './register-movie.component.html',
  styleUrls: ['./register-movie.component.css']
})
export class RegisterMovieComponent implements OnInit {

  movieForm : FormGroup;
  submitted : boolean = false;

  constructor(private fb: FormBuilder) {

    this.movieForm = fb.group({
      name: fb.control('',[Validators.required, Validators.minLength(4)]),
      pays: '',
      category: '',
      releaseDate: '',
    });

   }

  ngOnInit(): void {
  }


  registerMovie():void{
    this.submitted = true;
    if(this.movieForm.invalid)
      return;
    console.log(this.movieForm.value);
  }

}
