import { z } from 'zod'
import type { NextRequest } from 'next/server'
import data from '../data.json'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const product = data.products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase())
  })

  if (!product)
    return Response.json({ message: 'Product not founs' }, { status: 40 })

  return Response.json(product)
}
