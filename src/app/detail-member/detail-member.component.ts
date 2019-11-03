import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MemberService} from '../member.service';
import {IMember} from '../member.interface';

@Component({
  selector: 'app-detail-member',
  templateUrl: './detail-member.component.html',
  styleUrls: ['./detail-member.component.scss']
})
export class DetailMemberComponent implements OnInit {
  member: IMember;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService
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


}
