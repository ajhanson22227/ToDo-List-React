import React, { useState } from "react";
import { useParams } from "react-router-dom";

const TaskCreate = () => {
  const { projid } = useParams();
  const [busy, setBusy] = useState(true);

  return (
    <div>
      <p>Hello</p>
      <p>From task create</p>
    </div>
  );
};

export default TaskCreate;
