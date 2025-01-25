import Link from 'next/link'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import SearchForm from './search-form'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-whit">
          devstore
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-700" />
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/PedroDmMaia.png"
            width={24}
            height={24}
            alt=""
            className="w-6 h-6 rounded-full"
          />
        </Link>
      </div>
    </div>
  )
}
