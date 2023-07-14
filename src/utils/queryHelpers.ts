
interface Options {
    limit?: number
    orderBy?: "created" | "uploaded" | "updated" | "name"
}

export async function postVIMP (name: string, options: Options) {
    const data = new URLSearchParams();
    data.append('apikey', process.env.VIMP_API_KEY as string);
    options.limit && data.append("limit", options.limit.toString());
    options.orderBy && data.append("limit", options.orderBy);
    return await fetch(process.env.VIMP_SERVER + "/" + name, {method: 'POST', body: data});
}