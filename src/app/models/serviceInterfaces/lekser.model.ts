import { Lekse } from "../lekse";

export interface ILekseService {
    Laglekse(fag: string, innleveringsDato: Date, beskrivelse: string): void;
    HentAlle(): Lekse[];
    Hent(id: number): Lekse;
    HentUferdige(): Lekse[];
    HentFullforte(): Lekse[];
    MarkerFullfort(id: number): void;
    OppdaterLekse(lekse: Lekse): void;
}