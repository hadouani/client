import {Injectable} from '@angular/core';
import {User} from './user';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly _usersSource$ = new BehaviorSubject<User[]>([]);
  private readonly _users$ = this._usersSource$.asObservable();

  public setUsers(users: User[]) {
    this._usersSource$.next(users);
  }

  get users$(): Observable<User[]> {
    return this._users$;
  }

  constructor(private http: HttpClient) {
  }

  public load(): void {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(value => {
      this._usersSource$.next(value);
    });
  }

  public add(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', user);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/users/' + id);
  }

  findOne(id): Observable<any> {
    return this.http.get<any>('http://localhost:3000/users/' + id);
  }
}
