import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { allTranslates } from 'src/app/services/translation.service';
import { environment } from 'src/environments/environment';
import { Language } from 'src/app/models/entities/language';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css'],
})
export class NaviComponent implements OnInit {
  baseUrl = environment.baseUrl;
  languages: Language[] = [];

  constructor(
    private router: Router,
    private settingsService: SettingsService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.getLanguages();
    this.runActiveStateManagement();
  }

  runActiveStateManagement() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        $('.nav-link.nav-link-custom.active').removeClass('active');
        $('.nav-link.nav-link-custom').attr('routerLink', function (i, val) {
          if (val === event.url) {
            $(this).addClass('active');
          }
        });
      }
    });
  }

  navigate(url: string, id: string) {
    this.router.navigate([url]).then(() => {
      this.scroll(id);
    });
  }

  scroll(id: string) {
    var element = document.getElementById(id);
    var headerOffset = 135;
    var elementPosition = element!.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  getCurrentLanguage(): Language {
    return this.settingsService.getCurrentLanguage()!;
  }

  getCurrentLanguageCode() {
    return this.settingsService.getLanguageCodeFromLocalStorage();
  }

  getLanguages() {
    this.languages = this.languageService.getAll().data;
  }

  setLanguage(languageCode: string) {
    this.settingsService.setLanguage(languageCode);
    location.reload();
  }

  getTranslate(key: string) {
    return allTranslates.get(key);
  }
}
