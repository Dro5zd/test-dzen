import {useEffect, useState} from 'react';
import {
    SortProducts,
} from '../types/SortProducts';
import {imageAddresses, productTitles} from "../redux/api/data";

export const useCurrentProduct = () => {

    const [
        currentType,
        setCurrentType,
    ] = useState<SortProducts>(SortProducts.ALL);

    const generateRandomType = () => {
        const randomIndex = Math.floor(Math.random()
            * Object.values(SortProducts).length);
        const randomType = Object.values(SortProducts)[randomIndex];

        setCurrentType(randomType);
    };

    useEffect(() => {
        generateRandomType();
    }, [generateRandomType]);

    const getCurrType = () => {
        if (currentType === SortProducts.ALL) {
            return SortProducts.MONITORS;
        }

        return currentType;
    };

    const getCurrImage = () => {
        const type = getCurrType();

        return imageAddresses[type];
    };

    const getCurrName = () => {
        const type = getCurrType();

        return productTitles[type];
    };

    return {
        currentType: getCurrType(),
        currentImage: getCurrImage(),
        currentName: getCurrName(),
        generateRandomType,
    };
};
