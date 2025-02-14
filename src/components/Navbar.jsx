import {appleImg, bagImg, searchImg } from "../utlis/index";


const Navbar = () => {
    const navLists = ["Store", "Mac", "iPhone", "Support"]
  return (
   <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center ">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="apple" width={14} height={18}/>

        <div className="flex flex-1 justify-center max-sm:hidden">
            {
                navLists.map((nav)=>(
                    <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                       {nav}
                    </div>
                ))
            }
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search" width={14} height={18}/>
            <img src={bagImg} alt="bag" width={14} height={18}/>
        </div>
        
      </nav>
   </header>
  )
}

export default Navbar;
