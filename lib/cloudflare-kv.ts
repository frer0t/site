const KV_BASE = () =>
  `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/storage/kv/namespaces/${process.env.CLOUDFLARE_KV_NAMESPACE_ID}/values`;

function headers() {
  return {
    Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
  };
}

export async function kvGet(key: string): Promise<string | null> {
  const res = await fetch(`${KV_BASE()}/${encodeURIComponent(key)}`, {
    headers: headers(),
    cache: "no-store",
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`KV get failed for ${key}: ${res.status}`);
  }

  return res.text();
}

export async function kvPut(key: string, value: string): Promise<void> {
  const res = await fetch(`${KV_BASE()}/${encodeURIComponent(key)}`, {
    method: "PUT",
    headers: {
      ...headers(),
      "Content-Type": "text/plain",
    },
    body: value,
  });

  if (!res.ok) {
    throw new Error(`KV put failed for ${key}: ${res.status}`);
  }
}
