export interface Root {
    products: Product[]
  }
  
  export interface Product {
    id: number
    title: string
    handle: string
    body_html: string
    published_at: string
    created_at: string
    updated_at: string
    vendor: string
    product_type: string
    tags: any
    variants: Variant[]
    images: Image[]
    options: Option[]
    template_suffix?: string
    published_scope?: string
    status?: string
    admin_graphql_api_id?: string
    image?: Image2
  }
  
  export interface Variant {
    id: number
    title: string
    option1: string
    option2: any
    option3: any
    sku: string
    requires_shipping: boolean
    taxable: boolean
    featured_image?: FeaturedImage
    available?: boolean
    price: string
    grams: number
    compare_at_price?: string
    position: number
    product_id: number
    created_at: string
    updated_at: string
    inventory_policy?: string
    barcode?: string
    fulfillment_service?: string
    inventory_management?: string
    weight?: number
    weight_unit?: string
    inventory_item_id?: number
    inventory_quantity?: number
    old_inventory_quantity?: number
    tax_code?: string
    admin_graphql_api_id?: string
    image_id?: number
  }
  
  export interface FeaturedImage {
    id: number
    product_id: number
    position: number
    created_at: string
    updated_at: string
    alt: any
    width: number
    height: number
    src: string
    variant_ids: number[]
  }
  
  export interface Image {
    id: number
    created_at: string
    position: number
    updated_at: string
    product_id: number
    variant_ids: number[]
    src: string
    width: number
    height: number
    alt: any
    admin_graphql_api_id?: string
  }
  
  export interface Option {
    name: string
    position: number
    values: string[]
    id?: number
    product_id?: number
  }
  
  export interface Image2 {
    id: number
    alt: any
    position: number
    product_id: number
    created_at: string
    updated_at: string
    admin_graphql_api_id: string
    width: number
    height: number
    src: string
    variant_ids: number[]
  }
  