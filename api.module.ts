import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AnmeldungService } from './api/anmeldung.service';
import { DisziplinService } from './api/disziplin.service';
import { ErgebnisService } from './api/ergebnis.service';
import { MetaService } from './api/meta.service';
import { NutzerService } from './api/nutzer.service';
import { TeilnehmerService } from './api/teilnehmer.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AnmeldungService,
    DisziplinService,
    ErgebnisService,
    MetaService,
    NutzerService,
    TeilnehmerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
