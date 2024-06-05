"use client";

import CardOffer from "./CardOffer";
import CardPreviewMenu from "./CardPreviewMenu";
import CardPreviewSpecialMenu from "./CardPreviewSpecialMenu";

export default function Home() {
  return (
    <>
      <CardOffer />
      <CardOffer pictureLeft spanText="Special offer" />
      <CardPreviewMenu />
      <CardPreviewSpecialMenu />
    </>
  );
}
