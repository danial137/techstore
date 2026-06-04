"use client";

import { useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { IProduct } from "@/types/product";
import { Minus, Plus } from "lucide-react";
import { addToCart, removeFromCart } from "@/store/cartSlice";

const QuantitySelector = ({ product }: { product: IProduct }) => {
    const dispatch = useDispatch();

    const items = useAppSelector((state) => state.cart.items);

    const selectedItem = items.find(
        (item) => item.product.id === product.id
    );

    const handleMinusButton = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.stopPropagation();

        dispatch(
            removeFromCart({
                productId: product.id,
            })
        );
    };

    const handleAddButton = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.stopPropagation();

        dispatch(
            addToCart({
                product,
            })
        );
    };

    return (
        <div className="flex items-center gap-2">
            <button
                className="font-medium text-xs rounded-md w-9 h-9 cursor-pointer flex justify-center items-center hover:bg-red-500 hover:text-white"
                onClick={handleMinusButton}
            >
                <Minus className="h-4 w-4" />
            </button>

            <span>{selectedItem?.quantity ?? 0}</span>

            <button
                className="font-medium text-xs rounded-md w-9 h-9 cursor-pointer flex justify-center items-center hover:bg-green-500 hover:text-white"
                onClick={handleAddButton}
            >
                <Plus className="h-4 w-4" />
            </button>
        </div>
    );
};

export default QuantitySelector;