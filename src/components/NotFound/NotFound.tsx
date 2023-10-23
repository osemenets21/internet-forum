import React from "react";
import "./NotFound404Page.scss";
import "./NotFound.scss";

const NotFound404Page: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-header">404 - Page Not Found</h1>
      <p className="not-found-message">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound404Page;
