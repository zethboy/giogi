"use client";
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  useMemo,
  useState
} from 'react';
import './CardSwap.css';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  onCardClick?: (idx: number) => void;
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()} />
));
Card.displayName = 'Card';

const CardSwap: React.FC<CardSwapProps> = ({
  width = '100%',
  height = '100%',
  onCardClick,
  children
}) => {
  const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex = (activeIndex - 1 + childArr.length) % childArr.length;
  const nextIndex = (activeIndex + 1) % childArr.length;

  const rendered = childArr.map((child, i) => {
    const positionClass =
      i === activeIndex
        ? 'active-card'
        : i === prevIndex
        ? 'side-card left-card'
        : i === nextIndex
        ? 'side-card right-card'
        : 'hidden-card';

    return isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          className: `${child.props.className ?? ''} swap-card ${positionClass}`.trim(),
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        } as CardProps)
      : child;
  });

  return (
    <div className="card-swap-wrapper" style={{ width, height }}>
      {rendered}
      {childArr.length > 1 && (
        <div className="carousel-top-controls">
          <button
            type="button"
            className="carousel-control left"
            onClick={() => setActiveIndex((prev) => (prev - 1 + childArr.length) % childArr.length)}
            aria-label="Previous project"
          >
            ‹
          </button>

          <div className="swap-indicators">
            {childArr.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`indicator ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show project ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="carousel-control right"
            onClick={() => setActiveIndex((prev) => (prev + 1) % childArr.length)}
            aria-label="Next project"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default CardSwap;
