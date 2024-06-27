import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styles: [],
})
export class AddMemberComponent implements OnInit {
  createMemberForm: FormGroup = new FormGroup({});
  error: string | undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.createMemberForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      semester: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      career: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  createMember(): void {
    this.memberService.createMember(this.createMemberForm.value).subscribe({
      next: () => {
        this.router.navigate(['/members']);
      },
      error: (error) => {
        this.error = error.error.error;
      },
    });
  }
}
