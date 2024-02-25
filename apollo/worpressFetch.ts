//? source : https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/lib/api.ts
const API_URL = process.env.EXPO_PUBLIC_GRAPHQL_URI as string;

// const dedupedFetch = cache(async (serializedInit) => {
//   const response = await fetch(API_URL, JSON.parse(serializedInit));

//   const responseBody = await response.json();
//   if (!response.ok) {
//     throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
//   }
//   return responseBody;
// });

export async function wordpressFetch(query = '', { variables }: { variables: any }) {
  const headers = { 'Content-Type': 'application/json' };

  // if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //   headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  // }
  try {
    const res = await fetch(API_URL, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const responseBody = await res.json();
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}: ${JSON.stringify(responseBody)}`);
    }
    return responseBody;
  } catch (error) {
    console.log('this is the fetch error', { error, API_URL });
  }
}
