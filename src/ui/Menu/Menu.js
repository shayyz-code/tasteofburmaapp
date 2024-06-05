import { Suspense } from "react";
import { firebaseGetMenu } from "@/lib/firebasegetmenu";
import CardMenu from "../CardMenu";

export default async function Menu() {
  const res = await firebaseGetMenu();
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <CardMenu docs={res.docs} />
      </Suspense>
    </>
  );
}
