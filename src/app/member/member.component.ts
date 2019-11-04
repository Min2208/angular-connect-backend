import {Component, OnInit} from '@angular/core';
import {IMember} from '../member.interface';
import {MemberService} from '../member.service';
import {FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import {applySourceSpanToExpressionIfNeeded} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  providers: [MemberService]
})
export class MemberComponent implements OnInit {
  output: IMember[];
  info: IMember;
  data: FormGroup;
  search: IMember[];


  constructor(private memberService: MemberService, private fb: FormBuilder) {
    this.memberService.getMembers().subscribe(next => {
      this.output = next;
    });
  }

  ngOnInit() {
    this.data = this.fb.group({
      name: ['']

    })
    ;
  }

  findByName() {
    console.log(this.data.value.name);
    this.memberService.findByName(this.data.value.name).subscribe(next => {
      this.search = next;
    });
  }

}
