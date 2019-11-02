import {Component, OnInit} from '@angular/core';
import {IMember} from '../member.interface';
import {MemberService} from '../member.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {
  output: IMember[];
  info: IMember;


  constructor(private memberService: MemberService) {
    this.memberService.getMembers().subscribe(next => {
      this.output = next;
    });
  }

  ngOnInit() {
  }

}
