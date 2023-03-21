
interface Translations {
    en: string,
}

export interface Person {
    givenName: Translations,
    familyName: Translations,
    birth: {
        date: string,
        place: {
            cityNow: Translations,
        }
    },
    nobelPrizes: object[],
    wikipedia: {
        english: string,
    }
}