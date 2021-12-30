import React, { useState } from "react";
import Register from "../../../components/register/register.component";
import BeatLoader from "react-spinners/BeatLoader";
import { InvitePageContainer } from "../invite/invite.styles";

const InviteTokenPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return <InvitePageContainer>{isLoading ? <BeatLoader /> : <Register />}</InvitePageContainer>;
};

export default InviteTokenPage;
