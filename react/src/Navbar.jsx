const Navbar =({data})=>{
    
    return(
        <div className="w-full h-[3vh] bg-slate-500 flex justify-center items-center">
         { data.map(datas => (
            <span>
                {datas.appname}
            </span>
          ))}     
        </div>
    )
}
export default Navbar;