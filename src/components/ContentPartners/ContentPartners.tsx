import {Partners} from "@/utils/queryHelpers";
import PartnerCard from "@/components/PartnerCard/PartnerCard";

const ContentPartners = () => {
    return (
        <div className={"bg-primary_text py-10 max-md:px-[60px] px-24 mb-20"}>
            <h2 className={"mb-8 text-2xl max-sm:text-sm font-medium text-white"}>Premium content Partners</h2>
            <div className={"grid grid-cols-5 gap-5 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1"}>
                {Partners.map((partner)=>{
                    return <PartnerCard partner={partner} key={partner}/>
                })}
            </div>
        </div>
    );
};

export default ContentPartners;