export * from './anmeldung.service';
import { AnmeldungService } from './anmeldung.service';
export * from './disziplin.service';
import { DisziplinService } from './disziplin.service';
export * from './ergebnis.service';
import { ErgebnisService } from './ergebnis.service';
export * from './meta.service';
import { MetaService } from './meta.service';
export * from './nutzer.service';
import { NutzerService } from './nutzer.service';
export * from './teilnehmer.service';
import { TeilnehmerService } from './teilnehmer.service';
export const APIS = [AnmeldungService, DisziplinService, ErgebnisService, MetaService, NutzerService, TeilnehmerService];
