
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
export const SliderData = [
    {
        image:
            'http://dev.actuview.com/cache/b6a27b099e9922be7af2425ce94e2e1b.png',
        title:
            'Check out our category overview',
        text:
            'We have updated the video presentation on actuview: Now you’ll find all videos sorted by topics. Got to videos and browse each category to find your perfect CPD video'
    },
    {
        image:
            'http://dev.actuview.com/cache/79614c6d1abf4e300aebf623996265a1.png',
        title:
            'CNew edition of RGActual published',
        text:
            'Insightful input from our Sponsoring Partner RGA: Read the new edition of RGActual with topics ranging from COVID-19, ChatGPT to the role of reinsurers on the way to sustainability. Click here'
    },
];
export const Partners= [
    'https://www.actuview.com/cache/aaffb8c4429467a8d943bf5267464c34.png',
    'https://www.actuview.com/cache/c231b64bf23d1cbc35ac22c5c7cd1921.png',
    'https://www.actuview.com/cache/25c97c05641a74f13ba5e3414a1a9abc.png',
    'https://www.actuview.com/cache/b44bdd7c447af54c76ec2a1d3ad00590.png',
    'https://www.actuview.com/cache/bd49997cd857233ee4badbf1fda0d150.png',
    'https://www.actuview.com/cache/c678de6396b9fd93faf977778c257cc8.png'

];
