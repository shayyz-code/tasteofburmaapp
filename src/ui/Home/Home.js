import { Suspense } from "react";
import CardOffer from "./CardOffer";
import CardPreviewMenu from "./CardPreviewMenu";
import CardPreviewSpecialMenu from "./CardPreviewSpecialMenu";
import { firebaseGetMenuWhere } from "@/lib/firebasegetmenuwhere";

export default async function Home() {
  const exclusiveRes = await firebaseGetMenuWhere("exclusive");
  const specialRes = await firebaseGetMenuWhere("special");

  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <CardOffer />
        <CardOffer pictureLeft spanText="Special offer" />
        <CardPreviewMenu docs={exclusiveRes.docs} />
        <CardPreviewSpecialMenu docs={specialRes.docs} />
      </Suspense>
    </>
  );
}
