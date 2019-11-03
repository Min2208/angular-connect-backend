import {Component, OnInit} from '@angular/core';
import {IMember} from '../member.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../member.service';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.scss']
})
export class DeleteMemberComponent implements OnInit {

  member: IMember;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.memberService.getById(id).subscribe(
      next => (this.member = next),
      error => {
        console.log(error);
        this.member = null;
      }
    );
  }

  deleteMember(i: number) {
    this.memberService.deleteMember(i).subscribe(() => {
      this.message = 'Delete success';
    }, this.errorHandle);

  }

  errorHandle(error: any) {
    alert('Thao tac khong thanh');
  }
}

