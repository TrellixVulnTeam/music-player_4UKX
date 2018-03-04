import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { NotificationsComponent } from './components/pages/notifications/notifications.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PlayerComponent } from './components/player/player.component';
import { TimePipe } from './pipes/time.pipe';
import { BrowseComponent } from './components/pages/browse/browse.component';
import { RadioComponent } from './components/pages/radio/radio.component';
import { PlaylistsComponent } from './components/pages/playlists/playlists.component';
import { FeaturedComponent } from './components/pages/featured/featured.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    HomeComponent,
    SettingsComponent,
    NotificationsComponent,
    SignupComponent,
    LoginComponent,
    PlayerComponent,
    TimePipe,
    BrowseComponent,
    RadioComponent,
    PlaylistsComponent,
    FeaturedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
