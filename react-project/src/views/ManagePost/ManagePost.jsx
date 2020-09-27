import React from "react";

import { Wrapper } from "./styles";

/*
  As we did with the Vue project, we're going to reuse a component for both the
  Add & Edit post view,
  since it's pretty much the same component but with filled input & textarea values */
function ManagePost() {
  return (
    <Wrapper>
      <input type="text" />
      <textarea />
      <button type="button">Save</button>
    </Wrapper>
  );
}

export default ManagePost;
