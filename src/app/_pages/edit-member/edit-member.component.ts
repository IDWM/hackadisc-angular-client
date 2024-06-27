import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditMember } from 'src/app/_interfaces/edit-member';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styles: [],
})
export class EditMemberComponent implements OnInit {
  member: Member | undefined;
  editMemberForm: FormGroup = new FormGroup({});
  error: string | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.memberService.getMember(id).subscribe({
      next: (member) => {
        this.member = member;
        this.initializeForm();
      },
    });
  }

  initializeForm(): void {
    if (!this.member) {
      return;
    }

    this.editMemberForm = this.fb.group({
      name: [
        this.member.name,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [this.member.email, [Validators.required, Validators.email]],
      semester: [
        this.member.semester,
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      career: [
        this.member.career,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  editMember(): void {
    if (!this.member) {
      return;
    }

    const model: EditMember = { ...this.editMemberForm.value };

    this.memberService.editMember(this.member.id.toString(), model).subscribe({
      next: () => {
        this.router.navigate(['/members']);
      },
      error: (error) => {
        this.error = error.error.error;
      },
    });
  }
}
