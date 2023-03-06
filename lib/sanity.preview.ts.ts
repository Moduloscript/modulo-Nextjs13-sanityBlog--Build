import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error("Unable to load preview as you're not logged in");
}

if (!dataset || !dataset) {
  throw new Error(
    `Missing projectId or Dataset . Check your sanity.json or .env settings`
  );
}


export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})