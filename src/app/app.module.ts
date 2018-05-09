import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTreeViewModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { UserDirectoryComponent } from './user-directory/user-directory.component';


import { BmaDataService } from './bmadata-service/bma-data-service';
import { FileExplorerService } from './file-explorer/file-explorer.service';

@NgModule({
  declarations: [
    AppComponent,
    FileExplorerComponent,
    MainContentComponent,
    SubHeaderComponent,
    UserDirectoryComponent
  ],
  imports: [
    BrowserModule, DxTreeViewModule, FormsModule, HttpModule
  ],
  providers: [BmaDataService, FileExplorerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
