import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../member.service';
import {IMember} from '../member.interface';
import {FormBuilder, FormGroup} from '@angular/forms';

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
      id: '',
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
