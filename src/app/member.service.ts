import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IMember} from './member.interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {ILocation} from './location.interface';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getById(id: number): Observable<IMember> {
    return this.http.get<IMember>(`${this.API_URL}/${id}`);
  }

  getMembers(): Observable<IMember[]> {
    return this.http.get<IMember[]>(`${this.API_URL}`);
  }

  deleteMember(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);

  }


  createMember(post: Partial<IMember>): Observable<IMember> {
    return this.http.post<IMember>(`${this.API_URL}/add`, post);
  }

  updateMember(post: IMember): Observable<IMember> {
    console.log('ok');
    return this.http.put<IMember>(`${this.API_URL}/${post.id}`, post);

  }
  findByName(name: string): Observable<IMember[]> {
    return this.http.get<IMember[]>(`${this.API_URL}/search/${name}`);
  }

  getLocation(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(`${this.API_URL}/location`);
  }
}
