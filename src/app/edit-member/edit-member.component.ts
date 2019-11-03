import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../member.service';
import {IMember} from '../member.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {
  member: IMember;
  data: FormGroup;

  constructor(private route: ActivatedRoute,
              private memberService: MemberService,
              private router: Router,
              private fb: FormBuilder) {
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
    const id = +this.route.snapshot.paramMap.get('id');
    this.memberService.getById(id).subscribe(
      next => {
        this.member = next;
        this.data.patchValue(this.member);
      },
      error => {
        console.log(error);
        this.member = null;
      }
    );
  }

  editMember() {
    this.memberService.updateMember(this.data.value).subscribe(next => {
      this.router.navigate(['/home']);
    });
  }

}
