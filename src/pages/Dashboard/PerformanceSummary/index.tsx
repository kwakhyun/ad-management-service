import styled from 'styled-components';
import PerformanceCard from '../PerformanceCard';
import { useTrend } from '../../../context/TrendContext';

function PerformanceSummary() {
  const trends = useTrend();

  return (
    <Container>
      {trends?.summaryData.map(({ title, content, fluctuation, isIncreased, difference }) => (
        <PerformanceCard
          key={title}
          title={title}
          content={content}
          fluctuation={fluctuation}
          isIncreased={isIncreased}
          difference={difference}
        />
      ))}
    </Container>
  );
}

export default PerformanceSummary;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 22px;
`;
