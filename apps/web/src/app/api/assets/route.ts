import { NextRequest } from "next/server";
import { Asset } from "~/types";

async function fetchData(size: string | null): Promise<Asset[]> {
  const response = await fetch(
    "https://s3.coinmarketcap.com/generated/core/crypto/cryptos.json",
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  const data = await response.json();

  const fields = data.fields;
  const values = data.values;

  const idIndex = fields.indexOf("id");
  const nameIndex = fields.indexOf("name");
  const symbolIndex = fields.indexOf("symbol");
  const slugIndex = fields.indexOf("slug");

  const formattedData: Asset[] = values.map((item: any[]) => ({
    id: item[idIndex],
    name: item[nameIndex],
    symbol: item[symbolIndex],
    slug: item[slugIndex],
    image: `https://s2.coinmarketcap.com/static/img/coins/${size ?? "32x32"}/${item[idIndex]}.png`,
  }));
  return formattedData;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol");
  const size = searchParams.get("size");
  const data = await fetchData(size);
  let responseData;
  if (symbol) {
    const foundAsset = data.find((item) => item.symbol === symbol);
    responseData = foundAsset;
  } else {
    responseData = data;
  }

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
