import Image from "next/image";
import MenuLogo from "../../public/icons/list.svg";

export default function Header() {
    return (
        <header className="flex p-[14px] justify-between items-center sticky top-0 backdrop-blur-[10px] shadow-header-shadow">
            <p className="text-[25px] font-bold leading-[20px]">
                fredydlemus <br />{" "}
                <span className="text-[14px] font-light">portfolio</span>
            </p>
            <div className="flex bg-sky-blue min-w-[20px] border-[2px] border-solid border-gray-600 rounded-[10px] p-[10px]">
                <Image src={MenuLogo} alt="menu-logo" width={20} height={20} />
            </div>
        </header>
    );
}
