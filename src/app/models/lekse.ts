export class Lekse {
    constructor(
        public id: number,
        public fag: string,
        public innleveringsDato: Date,
        public fullfort: boolean,
        public beskrivelse: string
    ) { }
}