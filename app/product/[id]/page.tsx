"use client"
import { findProductById } from '@/utils/product'
import Link from 'next/link'
import { useParams } from 'next/navigation'


const ProductDetails = () => {
    const { id } = useParams()

    const product = findProductById(id as string)

    if (!product) {
        return <div className='flex flex-col items-center justify-center gap-2 mt-16'>
            <h1 className='text-2xl font-bold'>Product not found</h1>
            <p className='text-pale-sky'>The product you're looking for doesn't exist.</p>
            <Link href='/' className='text-sm font-medium py-2 px-4 rounded-md bg-red-500 text-white mt-6'></Link>
        </div>
    }

    return (
        <div>ProductDetails</div>
    )
}

export default ProductDetails