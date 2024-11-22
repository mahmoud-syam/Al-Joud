export interface Category {
    id: number
    slug: string
    image: string
    name: string
    translations: Translations
    products_count: number
  }
  
  export interface Translations {
    de: string
    en: string
  }
  