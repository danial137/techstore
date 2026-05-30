import { PRODUCTS } from "@/utils/product"
import Image from "next/image"

const Product = () => {
    return (
        <div className="grid grid-cols-4 gap-6 w-full">
            {PRODUCTS.map((product) => (
                <div key={product.id} className="rounded-lg shadow-sm border border-athens-gray overflow-hidden flex flex-col">
                    <div className="aspect-square">
                        <Image src={product.image} alt={product.name} width={200} height={200} className="object-cover h-full w-full "/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product