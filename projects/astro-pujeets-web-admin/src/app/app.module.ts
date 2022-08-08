import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EncodersBrandtechSharedLibraryModule } from 'encoders-module-library';
import { ConfirmationService, MessageService } from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AutoLoginGuard } from './auto-login.guard';
import { GraphQLModule } from './graphql.module';
import { LayoutModule } from './layout/layout.module';
import { PrimengSharedModule } from './primeng-shared.module';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EncodersBrandtechSharedLibraryModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    GraphQLModule,
    PrimengSharedModule,
  ],
  providers: [
    AuthenticationService,
    AutoLoginGuard,
    AuthGuard,
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
