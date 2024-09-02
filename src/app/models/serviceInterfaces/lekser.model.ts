import { Lekse } from "../lekse";

export interface ILekseService {
    Laglekse(lekse: Lekse): void;
    HentAlle(): Lekse[];
    Hent(id: number): Lekse;
    HentUferdige(): Lekse[];
    HentFullforte(): Lekse[];
    MarkerFullfort(id: number): void;
    OppdaterLekse(lekse: Lekse): void;
}