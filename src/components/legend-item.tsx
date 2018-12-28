import React from 'react';
import styled from '../utils/styled';

const LegendRow = styled.div`
  display: flex;
  align-items: center;
`;

const LegendColor = styled.div`
  display: inline-block;
  background-color: ${props => props.color};
  height: 1rem;
  width: 1rem;
  margin-right: 1rem;
`;

const LegendItem: React.FunctionComponent<LegendItemProps> = ({
  color,
  label,
}) => (
  <LegendRow data-testid={`legend-row--${label}`}>
    <LegendColor data-testid="color" color={color} />
    <span>{label}</span>
  </LegendRow>
);

type LegendItemProps = {
  color: string;
  label: string;
};

export default LegendItem;
