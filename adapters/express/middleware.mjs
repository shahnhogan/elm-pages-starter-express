import * as elmPages from "./elm-pages.mjs";

export default async (
  /** @type {import("express").Request} */ req,
  /** @type {import("express").Response} */ res,
  /** @type {import("express").NextFunction} */ next
) => {
  try {
    const renderResult = await elmPages.render(reqToElmPagesJson(req));
    const { headers, statusCode, body } = renderResult;
    res.status(statusCode).set(headers);
    if (renderResult.kind === "bytes") {
      res.send(Buffer.from(body));
    } else {
      res.send(body);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("<body><h1>Error</h1><pre>Unexpected Error</pre></body>");
  }
  next();
};

const reqToElmPagesJson = (/** @type {import("express").Request} */ req) => {
  const { body, headers, method } = req;
  const rawUrl = `${req.protocol}://${req.headers.host}${req.originalUrl}`;
  
  return {
    requestTime: Math.round(new Date().getTime()),
    method,
    headers,
    rawUrl,
    body: body && isFormData(headers) ? toFormData(body) : body && JSON.stringify(body) || null,
    multiPartFormData: null,
  };
};

const isFormData = (
  /** @type {import("http").IncomingHttpHeaders} */ headers
) => headers['content-type'] === 'application/x-www-form-urlencoded';

const toFormData = (/** @type {{ [s: string]: any; } | string} */ body) =>
  typeof body === 'string'
    ? body
    : Object.entries(body).reduce((formData, [key, value]) => {
        formData.append(key, value);
        return formData;
    }, new URLSearchParams()).toString() || null;
