import { Lekse } from "../lekse";

export interface ILekseService {
    Laglekse(lekse: Lekse): void;
    HentAlle(): Lekse[];
    Hent(id: string): Lekse;
    HentUferdige(): Lekse[];
    HentFullforte(): Lekse[];
    MarkerFullfort(id: string): void;
    OppdaterLekse(lekse: Lekse): void;
}