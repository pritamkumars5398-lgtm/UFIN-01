import React from "react";
import LegalDoc from "../components/LegalDoc";
import { privacyPolicy } from "../data/resourcesContent";

export default function PrivacyPolicy() {
  return <LegalDoc title="Privacy Policy" crumbLabel="Privacy Policy" doc={privacyPolicy} />;
}
