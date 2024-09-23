import { env } from "~/env";

const getMediaUrl = (key: string) => {
  return `${env.NEXT_PUBLIC_CLOUDFLARE_WORKER_ENDPOINT}/${key}`;
};

export default getMediaUrl;
