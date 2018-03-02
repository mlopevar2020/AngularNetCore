import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { ChampionService } from './champion.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { TreeModule } from 'ng2-tree';
import { ButtonDirective } from './button';
import { AdmnNavBarComponent } from './admn-nav-bar/admn-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    ChampionDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AdmnNavBarComponent,
    ButtonDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TreeModule
  ],
  providers: [ChampionService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
