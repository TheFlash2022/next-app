import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  cookies().set("resultsPerPage", "20");

  const theme = request.cookies.get("theme");

  console.log(theme);
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(cookies().get('resultsPerPage'))

  return new Response("<h1>hello api data</h1>", {
    headers: {
      "content-type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
