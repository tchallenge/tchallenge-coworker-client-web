export class AppEvent {

    id?: string;
    permalink: string;
    caption: string;
    description?: string;
    notifications?: {}[];
    maturities?: string[];
    specializations?: {}[];
    validFrom: string;
    validUntil?: string;
    status?: string;
}
