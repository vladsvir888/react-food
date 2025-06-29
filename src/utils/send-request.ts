type QueryParamsObject = Record<string, string>;

type Args = {
  url: string;
  method?: string;
  body?: unknown;
  headers?: HeadersInit;
  queryParams?: QueryParamsObject;
  next?: NextFetchRequestConfig;
};

const API_URL = "http://localhost:3001";

const prepareQueryParams = (paramsObject: QueryParamsObject) => {
  const params = new URLSearchParams(paramsObject);
  const queryString = params.toString();
  return queryString;
};

export const sendRequest = async <T>({
  url,
  method = "GET",
  body,
  headers = {},
  queryParams,
}: Args) => {
  let preparedUrl = "";
  const options = {
    method,
    headers: new Headers({
      "content-type": "application/json",
      ...headers,
    }),
    body: body ? JSON.stringify(body) : null,
  };

  preparedUrl = `${API_URL}/api/${url}`;

  if (queryParams) {
    preparedUrl = `${preparedUrl}?${prepareQueryParams(queryParams)}`;
  }

  try {
    const response = await fetch(preparedUrl, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.log(error, "error");
    return null;
  }
};
