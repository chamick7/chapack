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

const demo =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtaXh6YW1heCIsImVtYWlsIjoibWl4emFtYXhAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiU29ycmF3YXQiLCJsYXN0TmFtZSI6IkhheWVlaGF0ZW5nIiwiY3JlYXRlZEF0IjoiMjAxMy0wNy0wNFQwNTowNToxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAxMy0wNy0wNFQwNTowNToxMC4wMDBaIiwiaWF0IjoxNjQwNzEyNjMwLCJleHAiOjE2NDA3MTMyMzB9.a72bJETKvqY_I0vMzPaDpL4gN607gmsqCeegegszYL4";
var QRCode = require("qrcode.react");

const InvitePage = () => {
  const [token, setToken] = useState<string>(demo);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const inviteURL = `${window.location.origin}/invite/${token}`;

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false)
    },3000)
  }, [])

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
