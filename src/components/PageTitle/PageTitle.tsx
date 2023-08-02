import { FC } from 'react';
import './PageTitle.scss';

interface Props {
  quantity: number;
  title: string;
}

export const PageTitle: FC<Props> = ({ quantity, title }) => {
  return <span className="title">{`${title} / ${quantity}`}</span>;
};
