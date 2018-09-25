import React from "react";
import styled from "styled-components";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import Moment from "react-moment";
import { Icon } from "semantic-ui-react";

const HistoryList = styled.div`
  margin-top: 4rem;
  text-align: center;
`;
const HistoryLine = styled.p`
  color: grey;
  font-weight: 100;
  margin-bottom: 0;
`;
const Name = styled.span`
  font-weight: bolder;
  color: navy;
`;
const City = styled.span`
  font-weight: bolder;
  color: sienna;
`;
const When = styled.span`
  margin-left: 1rem;
  font-size: small;
`;

const QuizHistory = ({ quizId, completedQuizzes }) => {
  let filteredQuizHistory = null;
  if (
    isLoaded(completedQuizzes) &&
    completedQuizzes[quizId] &&
    completedQuizzes[quizId].completions
  ) {
    const filteredObj = completedQuizzes[quizId].completions.reduce(
      (obj, quiz) => {
        obj[quiz.uid] = quiz;
        return obj;
      },
      {}
    );
    filteredQuizHistory = Object.values(filteredObj).sort(
      (a, b) => b.timestamp.seconds - a.timestamp.seconds
    );
  }
  const compList =
    !isLoaded(completedQuizzes) || !filteredQuizHistory ? (
      <Icon loading name="circle notched" />
    ) : (
      filteredQuizHistory.map(completion => {
        return (
          <HistoryLine>
            <Name>{completion.displayName}</Name> from{" "}
            <City>{completion.city}</City> completed <em>{quizId}</em>
            {
              <When>
                (
                <Moment unix fromNow>
                  {completion.timestamp.seconds}
                </Moment>
                )
              </When>
            }
          </HistoryLine>
        );
      })
    );
  return (
    <HistoryList>
      <HistoryLine>{compList}</HistoryLine>
    </HistoryList>
  );
};

const mapStateToProps = state => ({
  completedQuizzes: state.firestore.data.completedQuizzes
});

export default compose(
  firestoreConnect(props => [
    { collection: "completedQuizzes", doc: props.quizId }
  ]),
  connect(mapStateToProps)
)(QuizHistory);
