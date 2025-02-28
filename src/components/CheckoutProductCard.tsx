import React from 'react';
import { Icons } from '../assets';
import { CheckoutProductCardProps } from '../interfaces/Product';

const CheckoutProductCard: React.FC<CheckoutProductCardProps> = ({
  product,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <div className="flex p-4 items-end">
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1 ml-4">
        <h3 className="font-semibold text-base leading-6 tracking-wide text-custom-dark">{product.title}</h3>
        <p className="font-semibold text-base leading-6 tracking-wide text-custom-dark">{product.price}€</p>
        <div className="flex items-center mt-2 space-x-2">
          <button
            onClick={() => onQuantityChange(product.id, -1)}
            className="w-6 h-6 bg-custom-blue rounded-full flex items-center justify-center"
          >
            <img
              src={Icons.Minus.src}
              alt={Icons.Minus.alt}
              className="w-4 h-4"
            />
          </button>
          <input
            type="number"
            value={product.quantity}
            readOnly
            className="w-[64px] h-[32px] rounded-[2px] border gap-[10px] text-center"
          />
          <button
            onClick={() => onQuantityChange(product.id, 1)}
            className="w-6 h-6 bg-custom-blue rounded-full flex items-center justify-center"
          >
            <img
              src={Icons.Plus.src}
              alt={Icons.Plus.alt}
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
      <button
        onClick={() => onRemove(product.id)}
        className="text-red-600 hover:text-red-800"
      >
        <img
          src={Icons.Delete.src}
          alt={Icons.Delete.alt}
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

export default CheckoutProductCard;