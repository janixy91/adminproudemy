import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        SitebarComponent,
        NopagefoundComponent,
        HeaderComponent
    ],
    exports: [
        BreadcrumbsComponent,
        SitebarComponent,
        NopagefoundComponent,
        HeaderComponent
    ]
})


export class SharedModule { }
