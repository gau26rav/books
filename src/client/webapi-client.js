const serverIp = "http://localhost:4000/";
const header = new Headers({ "Content-Type": "text/json" });

export default {
  GET: async function(url) {
    return fetch(`${serverIp}${url}`, header);
  },

  POST: async function(url, body) {
    if (!body)
      throw new Error(
        `Expected body as a second parameter in the {} method, to create an entry`,
        "POST"
      );
    return fetch(`${serverIp}${url}`, {
      method: "POST",
      body : JSON.stringify(body),
      headers: header
    });
  }
};
