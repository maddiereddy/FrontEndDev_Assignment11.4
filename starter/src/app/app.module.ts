import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { UsersComponent } from './users.component'
import { UserListComponent } from './user-list.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [UsersComponent, UserListComponent],
  bootstrap: [UsersComponent]
})

export class AppModule { }
