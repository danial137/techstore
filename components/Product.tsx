import { PRODUCTS } from "@/utils/product"
import Image from "next/image"

const Product = () => {
    return (
        <div className="grid grid-cols-4 gap-6 w-full">
            {PRODUCTS.map((product) => (
                <div key={product.id} className="rounded-lg shadow-sm border border-athens-gray overflow-hidden flex flex-col cursor-pointer">
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
                            <button className="font-medium text-sm px-3 border border-athens-gray py-2 cursor-pointer rounded-md"></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product