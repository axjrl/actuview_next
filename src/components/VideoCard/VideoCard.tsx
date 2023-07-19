import Link from "next/link";
import Image from "next/image";
const VideoCard = ({video}: any) => {
    let duration = video.properties["source-duration"];
    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration % 3600) / 60);
    let seconds = duration % 60;

    let formattedDuration = "";
    if (hours > 0) {
        formattedDuration += hours.toString() + ":";
    }
    formattedDuration += (minutes < 10 ? "0" : "") + minutes.toString() + ":";
    formattedDuration += (seconds < 10 ? "0" : "") + seconds.toString();

    return (
        <div className={"bg-white mb-5"}>
            <Link className={"relative videocard block"} href={`/videos/${video.mediakey}`}>
                {/* TODO: normal auto height */}
                <div className={"relative h-auto 2xl:min-h-[220px] xl:min-h-[240px] lg:min-h-[260px] min-h-[260px]"}>
                    <Image priority={true} fill src={video.thumbnail} sizes={"w-full"} alt="image" className={"object-cover"}/>
                    <span className={"text-sm absolute px-0.5 bg-primary_text text-white right-5 bottom-5"}>{formattedDuration}</span>
                </div>
                <div className={"videocard_overlay z-20"}>
                    <img src="/mini_logo_256.png" alt=""/>
                </div>
            </Link>
            <Link href={`/videos/${video.mediakey}`} className={"pt-2.5 px-2 w-fit"}>{video.title}</Link>
            <div className={"mt-20"}>

            </div>
        </div>
    );
};

export default VideoCard;