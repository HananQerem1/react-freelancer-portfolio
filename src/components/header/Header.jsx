function Header(){
    return <>
        <header className=' bg-bg py-3 px-1'>
            <div className='container row-between'>
                <a className='text-[18px] md:text-[24px] lg:text-[28px]'>start bootstrap</a>
                <ul className='center gap-7'>
                    <li><a href="#" className='hidden md:flex'>portfolio</a></li>
                    <li><a className='hidden md:flex'>about</a></li>
                    <li><a className='hidden md:flex'>contact</a></li>
                    <li className='md:hidden'><a className='center gap-1 anchor'>
                        <img src="./src/assets/icons/menu.svg" className='size-4'/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    </>
}
export default Header;



