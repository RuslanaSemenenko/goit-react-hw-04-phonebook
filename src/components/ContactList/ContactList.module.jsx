import styled from '@emotion/styled';

export const TaskList = styled.div`
  width: 600px;
  margin-top: 10px;
`;

export const TaskListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  & + & {
    margin-top: 12px;
  }

  &.completed {
    background-color: green;
  }
`;

export const TaskListItemText = styled.p`
  flex: 0 0 65%;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 16px;
  border-radius: 3px;
`;

export const TaskListActions = styled.div`
  display: flex;
  justify-content: center;
`;

export const TaskListButton = styled.button`
  margin-right: 4px;
  margin-left: 4px;
  padding: 5px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  color: #333333;

  &:hover {
    background-color: #333333;
    color: #ffffff;
    cursor: pointer;
  }
`;
