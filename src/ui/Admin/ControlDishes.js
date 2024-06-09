import { Suspense } from "react";
import CardMenu from "../CardMenu";
import { firebaseGetMenu } from "@/lib/firebasegetmenu";

export default async function ControlDishes() {
  const res = await firebaseGetMenu();
  return (
    <Suspense fallback={<div>Loading</div>}>
      <CardMenu docs={res.docs} />
    </Suspense>
  );
}
