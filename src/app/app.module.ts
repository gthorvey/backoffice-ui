import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

import { Ng2FileTreeModule } from 'ng2-file-tree/ng2-file-tree';

@NgModule({
  declarations: [
    AppComponent,
    FileExplorerComponent,
    MainContentComponent,
    SubHeaderComponent
  ],
  imports: [
    BrowserModule, Ng2FileTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
