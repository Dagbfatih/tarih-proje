import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { HistoricalArtifactsComponent } from './components/historical-artifacts/historical-artifacts.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import {
  NgbCarouselModule,
  NgbModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { KonyaComponent } from './components/konya/konya.component';
import { KonyaKitabeComponent } from './components/konya-kitabe/konya-kitabe.component';
import { VirtualTourComponent } from './components/virtual-tour/virtual-tour.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitabeComponent } from './components/kitabe/kitabe.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminComponent } from './components/admin/admin.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './components/user/user.component';
import { ClaimComponent } from './components/claim/claim.component';
import { UserClaimComponent } from './components/user-claim/user-claim.component';
import { TranslateComponent } from './components/translate/translate.component';
import { ContentComponent } from './components/content/content.component';
import { ImageComponent } from './components/image/image.component';
import { ClaimAddComponent } from './components/claim-add/claim-add.component';
import { UserClaimAddComponent } from './components/user-claim-add/user-claim-add.component';
import { TranslateAddComponent } from './components/translate-add/translate-add.component';
import { TranslateDeleteComponent } from './components/translate-delete/translate-delete.component';
import { TranslateUpdateComponent } from './components/translate-update/translate-update.component';
import { TranslateFastAddComponent } from './components/translate-fast-add/translate-fast-add.component';
import { ArtifactComponent } from './components/artifact/artifact.component';
import { LanguageComponent } from './components/language/language.component';
import { LanguageAddComponent } from './components/language-add/language-add.component';
import { LanguageDeleteComponent } from './components/language-delete/language-delete.component';
import { LanguageUpdateComponent } from './components/language-update/language-update.component';
import { ArtifactTypeComponent } from './components/artifact-type/artifact-type.component';
import { HistoricalPeriodComponent } from './components/historical-period/historical-period.component';
import { ArtifactAddComponent } from './components/artifact-add/artifact-add.component';
import { HistoricalPeriodAddComponent } from './components/historical-period-add/historical-period-add.component';
import { HistoricalPeriodDeleteComponent } from './components/historical-period-delete/historical-period-delete.component';
import { HistoricalPeriodUpdateComponent } from './components/historical-period-update/historical-period-update.component';
import { ArtifactTypeAddComponent } from './components/artifact-type-add/artifact-type-add.component';
import { ArtifactTypeDeleteComponent } from './components/artifact-type-delete/artifact-type-delete.component';
import { ArtifactTypeUpdateComponent } from './components/artifact-type-update/artifact-type-update.component';
import { ArtifactDeleteComponent } from './components/artifact-delete/artifact-delete.component';
import { ArtifactUpdateComponent } from './components/artifact-update/artifact-update.component';
import { ClaimDeleteComponent } from './components/claim-delete/claim-delete.component';
import { ClaimUpdateComponent } from './components/claim-update/claim-update.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserClaimDeleteComponent } from './components/user-claim-delete/user-claim-delete.component';
import { KebabCasePipe } from './pipes/kebab-case.pipe';
import { ArtifactImageAddComponent } from './components/artifact-image-add/artifact-image-add.component';
import { ArtifactAddConfirmationComponent } from './components/artifact-add-confirmation/artifact-add-confirmation.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ArtifactPreviewComponent } from './components/artifact-preview/artifact-preview.component';
import { ArtifactImageUpdateComponent } from './components/artifact-image-update/artifact-image-update.component';
import { ArtifactImageDeleteComponent } from './components/artifact-image-delete/artifact-image-delete.component';
import { AgmCoreModule } from '@agm/core';
import { LocationComponent } from './components/location/location.component';
import { LocationAddComponent } from './components/location-add/location-add.component';
import { LocationDeleteComponent } from './components/location-delete/location-delete.component';
import { LocationUpdateComponent } from './components/location-update/location-update.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { TranslateSearchFilterPipe } from './pipes/translate-search-filter.pipe';
import { ArtifactFilterPipe } from './pipes/artifact-filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { IOCModule } from './modules/ioc/ioc.module';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EpitaphImageDeleteComponent } from './components/epitaph-image-delete/epitaph-image-delete.component';
import { EpitaphImageAddComponent } from './components/epitaph-image-add/epitaph-image-add.component';
import { EpitaphImageUpdateComponent } from './components/epitaph-image-update/epitaph-image-update.component';
import { SourceComponent } from './components/source/source.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    HistoricalArtifactsComponent,
    SettingsComponent,
    FooterComponent,
    HomeComponent,
    KonyaComponent,
    KonyaKitabeComponent,
    VirtualTourComponent,
    AboutUsComponent,
    ContactComponent,
    KitabeComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    ClaimComponent,
    UserClaimComponent,
    TranslateComponent,
    ContentComponent,
    ImageComponent,
    ClaimAddComponent,
    UserClaimAddComponent,
    TranslateAddComponent,
    TranslateDeleteComponent,
    TranslateUpdateComponent,
    TranslateFastAddComponent,
    ArtifactComponent,
    LanguageComponent,
    LanguageAddComponent,
    LanguageDeleteComponent,
    LanguageUpdateComponent,
    ArtifactTypeComponent,
    HistoricalPeriodComponent,
    ArtifactAddComponent,
    HistoricalPeriodAddComponent,
    HistoricalPeriodDeleteComponent,
    HistoricalPeriodUpdateComponent,
    ArtifactTypeAddComponent,
    ArtifactTypeDeleteComponent,
    ArtifactTypeUpdateComponent,
    ArtifactDeleteComponent,
    ArtifactUpdateComponent,
    ClaimDeleteComponent,
    ClaimUpdateComponent,
    UserEditComponent,
    UserClaimDeleteComponent,
    KebabCasePipe,
    ArtifactImageAddComponent,
    ArtifactAddConfirmationComponent,
    ArtifactPreviewComponent,
    ArtifactImageUpdateComponent,
    ArtifactImageDeleteComponent,
    LocationComponent,
    LocationAddComponent,
    LocationDeleteComponent,
    LocationUpdateComponent,
    SearchFilterPipe,
    TranslateSearchFilterPipe,
    ArtifactFilterPipe,
    HighlightDirective,
    OrderByPipe,
    EpitaphImageDeleteComponent,
    EpitaphImageAddComponent,
    EpitaphImageUpdateComponent,
    SourceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxFileDropModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeb9alXm-VrEoLJcGojHkH2lAUYig5gms',
    }),
    NgbModule,
    NgbTypeaheadModule,
    IOCModule,
    AutocompleteLibModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
