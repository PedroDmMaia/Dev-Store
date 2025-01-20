import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src="/moletom-never-stop-learning 1.png"
          className=""
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>

      <Link
        href="/"
        className="col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src="/moletom-java.png"
          className=""
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>

      <Link
        href="/"
        className="col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          className=""
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>
    </div>
  )
}
