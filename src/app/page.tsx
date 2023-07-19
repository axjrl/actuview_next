import NewVideos from "@/components/NewVideos/NewVideos";
import SwiperWrap from "@/components/Swiper/SwiperWrap";
import CommunityPartners from "@/components/CommunityPartners/CommunityPartners";
import ContentPartners from "@/components/ContentPartners/ContentPartners";

export default function Home() {
  return (
    <div className="">
        <SwiperWrap/>
        <ContentPartners/>
        <NewVideos/>
        <CommunityPartners/>
    </div>
  )
}
