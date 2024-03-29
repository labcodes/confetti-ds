import NarrowSidebar from "./NarrowSidebar";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import FooterButton from "./FooterButton";
import UserAvatar from "./UserAvatar";
import Logotype from "./Logotype";
import CollapseButton from "./CollapseButton";
import Item from "./Item";

NarrowSidebar["Header"] = Header;
NarrowSidebar["Body"] = Body;
NarrowSidebar["Footer"] = Footer;
NarrowSidebar["FooterButton"] = FooterButton;
NarrowSidebar["UserAvatar"] = UserAvatar;
NarrowSidebar["Logotype"] = Logotype;
NarrowSidebar["CollapseButton"] = CollapseButton;
NarrowSidebar["Item"] = Item;

export { NarrowSidebarProps } from "./NarrowSidebar";
export { NavbarHeaderProps } from "./Header";
export { NavbarBodyProps } from "./Body";
export { NavbarFooterProps } from "./Footer";
export { NavbarFooterButtonProps } from "./FooterButton";
export { NavbarUserAvatarProps } from "./UserAvatar";
export { NavbarLogotypeProps } from "./Logotype";
export { NavbarCollapseButtonProps } from "./CollapseButton";
export { NavbarItemProps } from "./Item";

export default NarrowSidebar;
