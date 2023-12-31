import {postVIMP} from "@/utils/queryHelpers";
import VideoCard from "@/components/VideoCard/VideoCard";
import Link from "next/link";
import SelectLanguage from "@/components/SelectLanguage/SelectLanguage";
import {cookies} from "next/headers";


async function getData() {
    const res = await postVIMP("getMedia", {limit: 6});

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const NewVideos = async () => {
    const data = await getData()
    console.log(cookies().getAll())
    return (
        <div className={"my-10 mx-[100px] max-md:mx-[60px]"}>
            <div className={"flex items-center justify-between pb-5"}>
                <h3>New videos</h3>
                <SelectLanguage minimized={false}/>
            </div>
            <div className={"grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-x-8"}>
                {data.media.medium.map((video: any) =>{
                    return <VideoCard key={video.mid} video={video}/>
                })}
            </div>
            <Link className={"hover:text-primary w-full block text-center border-b border-primary"} href={"/video"}>View all</Link>
        </div>
    );
};

export default NewVideos;