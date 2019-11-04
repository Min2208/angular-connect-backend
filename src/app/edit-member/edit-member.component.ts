import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../member.service';
import {IMember} from '../member.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILocation} from '../location.interface';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {
  member: IMember;
  data: FormGroup;
  message: string;
  location: ILocation[];

  constructor(private route: ActivatedRoute,
              private memberService: MemberService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.memberService.getLocation().subscribe(next => {
      this.location = next;
      console.log(this.location);
    }, error => {
      alert('thao tac khong thanh cong');
    });
    this.data = this.fb.group({
      id: '',
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
      // this.router.navigate(['/home']);
      this.message = 'Update success';
    });
  }

}
