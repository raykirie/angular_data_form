import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users: any[] = []
  public nameValue: string = ''
  public emailValue:string = ''
  public emails: string[] = []
  public rangeValue: string ='10'


  private setToArray (data: any[]) :string[] {

    let set = new Set(data.map(el => el.email.slice(el.email.lastIndexOf('.')+ 1)))
    return [...set]
  }

  public fetchUserData() :void {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.users = data
        this.emails = this.setToArray(data)
      })
  }

  public computedUsers(): any[] {
    let value = this.nameValue.toLowerCase()
    return this.users.filter(el => {
      return el.name.toLowerCase().includes(value)
      && (this.emailValue === 'all' || el.email.endsWith(this.emailValue))
      && (el.id >= 1 && el.id <= +this.rangeValue)
    })
  }
}
