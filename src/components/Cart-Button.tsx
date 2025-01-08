'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import userNameAtom from '@/utils/globalStats/atoms/UserNameAtoms';

export function AddToCartButton({ productName }: { productName: string }) {
  const [added, setAdded] = useState(false);
  const [userName] = useAtom(userNameAtom);

  const handleClick = () => {
    setAdded(true);
    alert(`${productName} has been added to the cart by ${userName}!`);
  };

  return (
    <button onClick={handleClick} disabled={added}>
      {added ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
}
