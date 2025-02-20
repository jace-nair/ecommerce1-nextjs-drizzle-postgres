// Constant file to read environment variable from env.local

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "GreatShop"
export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN || "Great value at good price"
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "An ecommerce store built with Next JS, Drizzle and PostgreSQL"