import Link from "next/link";
import Image from "next/image";

const PartnerCard = ({partner}:{partner: string}) => {
    return (
        <div className={"relative"}>
            <Link className={"h-fit bg-white relative block"} href={"/partners"}>
                <Image priority={true} className={"h-auto object-contain"} width={200}
                       height={160}
                       alt={"alt"}
                       sizes="33vw"
                       style={{ height: '100%', width: '100%' }}
                       src={partner}
                />
                <span className={"absolute px-1 font-medium pb-0.5 bottom-2.5 right-2.5 bg-transparent_gray text-white text-sm"}>
                    <span className={"mx-1"}>
                        172
                    </span>
                    <span className={"mx-1"}>
                        (0 New)
                    </span>
                </span>
            </Link>
            <p className={"mt-1 mb-3 text-white"}>European Actuarial Academy</p>
        </div>
    );
};

export default PartnerCard;