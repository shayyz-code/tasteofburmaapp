import { Suspense } from "react";
import { firebaseGetMenu } from "@/lib/firebasegetmenu";
import CardMenu from "../CardMenu";
import H3 from "../H3";

export default async function Menu() {
  const res = await firebaseGetMenu();
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        margin: "40px 0 0 0",
      }}
    >
      <H3>
        Enjoy our <span>Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
        >
          <path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" />
        </svg>
      </H3>
      <Suspense fallback={<div>Loading</div>}>
        <CardMenu docs={res.docs} />
      </Suspense>
    </div>
  );
}
