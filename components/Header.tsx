"use client"
import { Badge } from "@/shared/ui/badge"
import { useAppSelector } from "@/store/hooks"
import { Package, Search, ShoppingCart } from "lucide-react"
import Link from 'next/link'
import { usePathname } from "next/navigation"

const Header = () => {

    const pathname = usePathname()
    const showSearchBar = pathname === "/"
    const items = useAppSelector((state) => state.cart.items)
    const totalQuantity = items.reduce((acc, curr) => curr.quantity + acc, 0)
    return (
        <header className="sticky top-0 z-10 backdrop-blur w-full flex items-center justify-between py-4 px-4 md:px-8 lg:px-20 border-b border-athens-gray">
            <Link href="/" className="flex items-center gap-2">
                <Package className="text-red-500 h-5 w-5" />
                <span className="font-semibold text-sm sm:text-base">
                    TechStore
                </span>
            </Link>

            <div className="flex gap-4 items-center">
                {showSearchBar ? (<div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-santas-gray  " />
                    <input className="outline-none w-80 border rounded-2xl border-athens-gray py-2 pl-8 rouded-md text-sm" placeholder="search products ... " />
                </div>
                ) : null}

                <Link href="/cart" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {totalQuantity > 0 ? (
                        <Badge className="bg-red-500 h-5 w-5 text-white text-center text-xs absolute -top-3.5 -right-4">{totalQuantity}</Badge>
                    ) : null}

                </Link>
            </div>
        </header>
    )
}

export default Header