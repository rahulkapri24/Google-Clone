

const Footer:React.FC =()=>{
    return (
        <>
        <div className="absolute bottom-0 w-full bg-neutral-100">
            <p className="text-slate-700 text-xs py-2 px-8">India</p>
            <div className="flex py-2 px-8">
                <ul className="flex [&>*]:mr-6 text-sm text-slate-700">
                    <li>About</li>
                    <li>Advertisement</li>
                    <li>Buisness</li>
                    <li>How Search Works</li>
                </ul>
                <ul className="flex [&>*]:mr-6 text-sm text-slate-700 ml-auto" >
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Footer;