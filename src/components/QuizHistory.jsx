import React from "react";
import styled from "styled-components";

const HistoryList = styled.div`
  margin-top: 4rem;
  text-align: center;
`;
const HistoryLine = styled.div`
  color: grey;
  font-weight: 100;
`;
const Name = styled.span`
  font-weight: bold;
`;
const City = styled.span`
  font-weight: bold;
`;
const When = styled.span`
  margin-left: 1rem;
  font-size: small;
`;
const QuizHistory = () => {
  return (
    <HistoryList>
      <HistoryLine>
        <Name>Ralph</Name> from <City>Queens</City> completed the{" "}
        <em>Shapes Quiz</em> <When>(3 hours ago)</When>
      </HistoryLine>
    </HistoryList>
  );
};

export default QuizHistory;
