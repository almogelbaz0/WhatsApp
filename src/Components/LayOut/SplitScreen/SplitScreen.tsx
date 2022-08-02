import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SplitedDiv = styled("div")<{ weight: number | string }>`
  flex: ${(props) => props.weight};
`;

interface SplitScreenProps {
  children: JSX.Element[];
  weight: (number | string)[];
}

const SplitScreen = ({ weight, children }: SplitScreenProps) => {
  return (
    <ContainerDiv className="splitScreenContainer">
      {children.map((child: JSX.Element, index) => {
        return (
          <SplitedDiv weight={weight[index] ? weight[index] : 0}>
            {child}
          </SplitedDiv>
        );
      })}
    </ContainerDiv>
  );
};

export default SplitScreen;
