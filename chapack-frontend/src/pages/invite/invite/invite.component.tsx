import React, { useEffect } from "react";
import { useState } from "react";
import {
  ButtonContainer,
  InvitePageContainer,
  LinkButton,
  QRCodeContainer,
  UrlContainer,
} from "./invite.styles";
import Card from "../../../components/card/card.component";
import { Link } from "react-router-dom";
import CopyButton from "../../../components/button/copy-button/copy-button.component";
import { AiOutlineArrowRight } from "react-icons/ai";
import BeatLoader from "react-spinners/BeatLoader";
import axiosApiInstance from "../../../utils/axios-instance.util";


var QRCode = require("qrcode.react");

const InvitePage = () => {
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const inviteURL = `${window.location.origin}/invite/${token}`;

  useEffect(() => {
    axiosApiInstance
      .post("/api/user/invite-token")
      .then((response) => {
        setToken(response.data.token);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <InvitePageContainer>
      {isLoading ? (
        <BeatLoader color={process.env.REACT_APP_MAIN_COLOR} size={20} />
      ) : (
        <>
          <h1 className="fw-bolder">INVITE LINK</h1>
          <Card>
            <QRCodeContainer>
              <QRCode className="qr" value={inviteURL} />
            </QRCodeContainer>
          </Card>
          <UrlContainer>
            <div className="url-holder">{inviteURL}</div>
          </UrlContainer>
          <ButtonContainer>
            <Link to={token} replace>
              <LinkButton>
                <span>
                  {" "}
                  <AiOutlineArrowRight />{" "}
                </span>
                <button>Sign Up</button>
              </LinkButton>
            </Link>
            <CopyButton path={inviteURL} />
          </ButtonContainer>
        </>
      )}
    </InvitePageContainer>
  );
};

export default InvitePage;
