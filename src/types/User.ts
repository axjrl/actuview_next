
export type Languages = 'cz' | 'en' | 'fr' | 'de' | 'lt'

export interface User {
    lang_preferences : Array<Languages>;
}