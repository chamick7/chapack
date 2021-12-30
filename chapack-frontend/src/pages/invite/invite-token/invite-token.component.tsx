import React, { useEffect, useState } from "react";
import Register from "../../../components/register/register.component";
import BeatLoader from "react-spinners/BeatLoader";
import { InvitePageContainer } from "../invite/invite.styles";
import axiosApiInstance from "../../../utils/axios-instance.util";
import { useParams } from "react-router-dom";
import Invalid from "../../../components/invalid/invalid.component";

const InviteTokenPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [inviter, setInviter] = useState<string | undefined>();
  const [isValid, setIsValid] = useState<boolean>(true);
  const { token } = useParams();

  useEffect(() => {
    axiosApiInstance
      .get(`/api/user/invite-token/${token}`)
      .then((result) => {
        setIsLoading(false);
        setInviter(result.data.inviter);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsValid(false);
      });
  }, []);

  return (
    <InvitePageContainer>
      {isLoading ? (
        <BeatLoader />
      ) : isValid ? (
        <Register inviter={inviter} />
      ) : (
        <Invalid message="Token is invalid or expired" />
      )}
    </InvitePageContainer>
  );
};

export default InviteTokenPage;
