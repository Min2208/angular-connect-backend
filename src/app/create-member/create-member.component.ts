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
  message: string;

  constructor(private fb: FormBuilder, private memberService: MemberService, private router: Router) {
  }

  ngOnInit() {
    this.data = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      location: this.fb.group({
        id: '10',
        name: 'ST'
      }),
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
      address: ['', [Validators.required]],
      img: 'avata.png'

    })
    ;
  }

  addMember() {
    this.memberService.createMember(this.data.value).subscribe(next => {
      this.message = 'Add Member Success';
    });
    console.log(this.data.value);
  }
}
