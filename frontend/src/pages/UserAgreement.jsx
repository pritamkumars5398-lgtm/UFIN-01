import React from "react";
import LegalDoc from "../components/LegalDoc";
import { userAgreement } from "../data/resourcesContent";

export default function UserAgreement() {
  return <LegalDoc title="User Agreement" crumbLabel="User Agreement" doc={userAgreement} />;
}
