import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'header',
    templateUrl: 'header.html'
})

export class Header implements OnInit {
    constructor(public translate: TranslateService) {
        translate.addLangs(['en', 'es']);
        translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }

    ngOnInit() { }
}