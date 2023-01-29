import styled from 'styled-components';

export const StatisticsList = styled.ul`
  margin: 0 0 10px 0;
`;

export const StatisticsItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  color: ${({ item }) =>
    (item === 'good' && '#218720') ||
    (item === 'neutral' && '#f1e33f') ||
    (item === 'bad' && '#e93b3b')};
`;

export const StatisticsResult = styled.p`
  text-decoration: underline;
  font-size: 20px;
  font-weight: bold;
`;
