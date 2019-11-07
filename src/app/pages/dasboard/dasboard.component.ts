import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/service.index';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  public lstUser: User[] = [];

  constructor( public _data: UserService) {
    console.log(_data.menu);

    this.getUsers();
  }

  getUsers(){
    this._data.getUsers().subscribe(
      result => {
        if(result.code != 200){
            this.lstUser = result;
            console.log(this.lstUser);
        }else{
            console.log(result.data);
        }

    },
    error => {
        console.log(<any>error);
    }

    )
  }


  ngOnInit() {
  }

  searcUser(searchText: string, bySearch: string) {
    console.log(searchText);
    console.log(bySearch);
    let searchUsers: User[] = [];
    
    for( let user of this.lstUser ) {
      let name = user.name.toLowerCase();

      if( name.indexOf( searchText.toLowerCase() ) >= 0 ) {
        searchUsers.push(user);
      }
    }

    this.lstUser = searchUsers;
    return searchUsers;
  }

}
