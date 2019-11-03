import {Component, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validator} from '@angular/forms';
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
      firstName: '',
      lastName: '',
      age: '',
      location: this.fb.group({
        id: '1',
        name: 'GK'
      }),
      height: '',
      weight: '',
      address: '',
      img: 'quanghai.png'

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
