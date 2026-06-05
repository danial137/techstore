import { findProductById } from '@/utils/product'
import { useParams } from 'next/navigation'


const ProductDetails = () => {
    const { id } = useParams()

    const product = findProductById(id as string)

    if (!product) {
        return <div className='flex flex-col'></div>
    }

    return (
        <div>ProductDetails</div>
    )
}

export default ProductDetails