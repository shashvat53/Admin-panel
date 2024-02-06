import React from "react";
import { Link } from "react-router-dom";

const PagePath = ({
  pathOne,
  pathTwo,
  pathOneName,
  pathTwoName,
  pathThreeName,
}) => {
  return (
    <div>
      <ol className="flex ">
        <li className="text-blue-500">
          <Link to={`${pathOne}`}>{pathOneName}</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-blue-500">
          <Link to={`${pathTwo}`}>{pathTwoName}</Link>
        </li>
        &nbsp;/&nbsp;
        <li className="text-gray-500">
          <Link to="">{pathThreeName}</Link>
        </li>
      </ol>
    </div>
  );
};

export default PagePath;
