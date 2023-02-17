import TagDropdown from "./TagDropdown";
import TagDropdownItem from "./TagDropdownItem";
import SectionTitle from "./DropdownSectionTitle";

TagDropdown["TagItem"] = TagDropdownItem;
TagDropdown["SectionTitle"] = SectionTitle;

export { TagDropdownProps } from "./TagDropdown";
export { TagDropdownItemProps } from "./TagDropdownItem";
export { DropdownSectionTitleProps as SectionTitleProps } from "./DropdownSectionTitle";
export { TagDropdown, TagDropdownItem, SectionTitle };
