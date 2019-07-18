import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './app.login';
import {RouterModule, Routes} from '@angular/router';

const routes:Routes=[
    //when we run the application, we must get Logincomponent as home page by default by using router
    {path:'',component:LoginComponent}
]

@NgModule({
    imports: [
        BrowserModule, FormsModule,RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,LoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
