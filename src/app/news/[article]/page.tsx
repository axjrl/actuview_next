interface Props {
    params: {
        article: string
    }
}
const ArticlePage = ({params}: Props) => {
    console.log(params)
    return (
        <div>
            
        </div>
    );
};

export default ArticlePage;