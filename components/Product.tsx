"use client"
import { addToCart } from "@/store/cartSlice"
import { useAppSelector } from "@/store/hooks"
import { IProduct } from "@/types/product"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useDispatch } from "react-redux"
import QuantitySelector from "./QuantitySelector"
import { useRouter } from "next/navigation"

const Product = () => {
    const { items, products } = useAppSelector((state) => state.cart)
    const router = useRouter()
    const dispatch = useDispatch();

    const handleProductClick = (id: string) => {
        router.push(`product/${id}`)
    }

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product: IProduct) => {
        e.stopPropagation()
        dispatch(addToCart({ product }))
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {products.map((product) => (
                <div key={product.id} className="rounded-lg shadow-sm border border-athens-gray overflow-hidden flex flex-col cursor-pointer" onClick={() => handleProductClick(product.id)}>
                    <div className="aspect-square">
                        <Image src={product.image} alt={product.name} width={200} height={200} className="object-cover h-full w-full " />
                    </div>
                    <div className="p-4 flex flex-col grow justify-between ">
                        <div className="flex flex-col gap-1.5">
                            <p className="text-pale-sky text-xs font-medium uppercase tracking-wider">{product.category}</p>
                            <h3 className="font-medium leading-tight text-base">{product.name}</h3>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <p className="mt-2 text-lg font-semibold text-shark">${product.price}</p>
                            {items.some((item) => item.product.id === product.id) ? <QuantitySelector product={product} /> : (
                                <button className="font-medium text-sm px-3 border border-athens-gray py-2 cursor-pointer rounded-md flex items-center justify-center gap-2 shadow-xs" onClick={(e) => handleAddToCart(e, product)}>
                                    <ShoppingCart className="h-4 w-4" />
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {products.length === 0 ? (

                <div className="flex flex-col gap-4 items-center py-8">
                    <p className="text-lg font-medium">No products found</p>
                </div>
            ) : null}


        </div>


    )
}

export default Product