import fetch from "isomorphic-fetch";

export async function deploy() {
    // POST to our deploy hook
    // runs a new deployment on Zeit

    // TODO: use secrets manager for this for better security
    const response = await fetch(``, {
        method: "POST"
    }).then(res => res.json());

    console.log({ response });
}
