export interface Product {
    id: number
    categoryprod: CategoryProd
    sku: string
    name: string
    slug: string
    images: string[]
    description: string
    base_price: string
    has_sizes: number
    is_active: number
    is_featured: number
    in_stock: number
    on_sale: number
    variations: any[]
    translations: Translation[]
    created_at: string
    updated_at: string
  }
  
  export interface CategoryProd {
    id: number
    name: string
  }
  
  export interface Translation {
    locale: string
    name: string
  }
  