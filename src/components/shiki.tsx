import { component$ } from "@builder.io/qwik";
import * as shiki from "shiki";

// @ts-ignore
export const MyHighlighter = component$(async () => {
  const highlighter = await shiki.getHighlighter({ theme: "nord" });
  const code = highlighter.codeToHtml(`console.log('shiki');`, { lang: "js" });
  return <div dangerouslySetInnerHTML={code}></div>;
});
