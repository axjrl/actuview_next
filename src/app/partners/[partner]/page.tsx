interface Props {
    params: {
        partner: string
    }
}
const PartnerInfo = ({params} : Props) => {
    console.log(params)
    return (
        <div>

        </div>
    );
};

export default PartnerInfo;