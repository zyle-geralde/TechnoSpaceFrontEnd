import "../styles/loginsignup.css"

function TitleLogComp(props) {
    return <>
        <div className="font-bold text-2xl md:text-4xl p-4">
            { props.title }
        </div>
    </>
}


export default TitleLogComp