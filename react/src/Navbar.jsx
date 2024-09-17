const Navbar =({data})=>{
    
    return(
        <div className="w-full h-[5vh] bg-slate-500 flex justify-center items-center">
         { data.map(datas => (
            <span>
                {datas.appname}
            </span>
          ))}     
        </div>
    )
}
export default Navbar;