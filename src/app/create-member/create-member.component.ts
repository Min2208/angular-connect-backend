import {Component, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import {MemberService} from '../member.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent implements OnInit {
  data: FormGroup;

  constructor(private fb: FormBuilder, private memberService: MemberService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      age: ['', [Validators.required, Validators.minLength(18)]],
      location: this.fb.group({
        id: '10',
        name: 'ST'
      }),
      height: ['', [Validators.required, Validators.minLength(4)]],
      weight: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required, Validators.minLength(4)]],
      img: 'avata.png'

    })
    ;
  }

  addMember() {
    this.memberService.createMember(this.data.value).subscribe(next => {
      this.router.navigate(['/home']);
    });
    console.log(this.data.value);
  }
}
