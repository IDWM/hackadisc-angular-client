import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Member } from '../_interfaces/member';
import { Observable } from 'rxjs';
import { CreateMember } from '../_interfaces/create-member';
import { EditMember } from '../_interfaces/edit-member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**
   * Create a member
   * @param createMember - The member to create
   * @returns Observable<Member> - An observable of the created member
   */
  createMember(createMember: CreateMember): Observable<Member> {
    return this.http.post<Member>(this.baseUrl + '/member', createMember);
  }

  /**
   * Get all members
   * @returns Observable<Member[]> - An observable of an array of members
   */
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl + '/member');
  }

  /**
   * Get a member by id
   * @param id - The id of the member to get
   * @returns Observable<Member> - An observable of the member
   */
  getMember(id: string): Observable<Member> {
    return this.http.get<Member>(this.baseUrl + `/member/${id}`);
  }

  /**
   * Edit a member
   * @param id - The id of the member to edit
   * @param member - The member to edit
   */
  editMember(id: string, member: EditMember) {
    return this.http.put(this.baseUrl + `/member/${id}`, member);
  }
}
