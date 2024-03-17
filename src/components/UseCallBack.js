import React,{memo} from "react";

const UseCallBack = ({ useCallBackHandler }) => {
  console.log("UseCallBackHandler is Called");
  return (
    <div>
      <h2 className="text-danger App mb-3">UseCallBackHandlerComponent : {useCallBackHandler()}</h2>
    </div>
  );
};

export default memo(UseCallBack);
