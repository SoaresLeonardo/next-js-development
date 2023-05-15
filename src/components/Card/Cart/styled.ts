import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
`;

export const Price = styled.p`
  font-weight: bold;
`;
export const Description = styled.p``;

export const Quantity = styled.span``;

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
`;
