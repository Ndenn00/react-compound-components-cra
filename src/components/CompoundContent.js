import React from 'react';

const CompoundContent = ({ children }) => {
  return (
    <div className="Modal">
      <div className="Modal-content">{children}</div>
    </div>
  );
};

const CompoundHeader = ({ children }) => {
  return (
    <div className="Modal-header">
      <h2>{children}</h2>
    </div>
  );
};

const CompoundBody = ({ children }) => {
  return <div className="Modal-body">{children}</div>;
};

const CompoundActions = ({ children }) => {
  return <div className="Modal-actions">{children}</div>;
};

CompoundContent.Header = CompoundHeader;
CompoundContent.Body = CompoundBody;
CompoundContent.Actions = CompoundActions;

export default CompoundContent;