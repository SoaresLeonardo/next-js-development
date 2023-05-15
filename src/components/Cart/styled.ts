import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  flex-grow: 1;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const QuantityAction = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 16px;
`;

export const QuantityWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const Quantity = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;
