import React from 'react';

import './SectionHeader.scss';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  increasedMarginTop?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  className,
  increasedMarginTop,
}: SectionHeaderProps) => {
  return (
    <div
      className={`section-heading${className ? ` ${className}` : ''}${
        increasedMarginTop ? ' inc-margin-top' : ''
      }`}
    >
      <h2 className="section-heading__title is-64 is-bold">{title}</h2>
      {subtitle && (
        <div className="section-heading__subtitle is-32 is-grey">
          {subtitle}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
