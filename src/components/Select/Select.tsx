import {ChangeEvent, FC} from 'react';
import './Select.scss';
import {SortProducts} from '../../types/SortProducts';

interface Props {
    label: string;
    onSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    value: SortProducts;
}

export const Select: FC<Props> = ({
                                      label,
                                      onSelectChange,
                                      value,
                                  }) => {
    return (
        <div className="select">
            <label
                className="select__label"
                htmlFor="select"
            >
                {label}
            </label>

            <select
                value={value}
                onChange={onSelectChange}
                className="select__selector"
                id="select"
            >
                {Object.values(SortProducts).map((type) => {
                    const correctName
                        = type.slice(0, 1).toLocaleUpperCase()
                        + type.slice(1).toLocaleLowerCase();

                    return (
                        <option key={type} value={type}>
                            {correctName}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
