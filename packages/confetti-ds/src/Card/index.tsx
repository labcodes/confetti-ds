import OutlineCard from "./OutlineCard";
import FilledCard from "./FilledCard";
import OutlineFilledCard from "./OutlineFilledCard";
import CardImage from "./CardImage";
import CardHeader from "./CardHeader";
import CardDivider from "./CardDivider";
import LinkAction from "./LinkAction";
import DoubleAction from "./DoubleAction";

OutlineCard["CardHeader"] = CardHeader;
OutlineCard["CardImage"] = CardImage;
OutlineCard["CardDivider"] = CardDivider;
OutlineCard["LinkAction"] = LinkAction;
OutlineCard["DoubleAction"] = DoubleAction;

FilledCard["CardHeader"] = CardHeader;
FilledCard["CardImage"] = CardImage;
FilledCard["CardDivider"] = CardDivider;
FilledCard["LinkAction"] = LinkAction;
FilledCard["DoubleAction"] = DoubleAction;

OutlineFilledCard["CardHeader"] = CardHeader;
OutlineFilledCard["CardImage"] = CardImage;
OutlineFilledCard["CardDivider"] = CardDivider;
OutlineFilledCard["LinkAction"] = LinkAction;
OutlineFilledCard["DoubleAction"] = DoubleAction;

export { OutlineCardProps } from "./OutlineCard";
export { FilledCardProps } from "./FilledCard";
export { OutlineFilledCardProps } from "./OutlineFilledCard";
export { CardImageProps } from "./CardImage";
export { CardHeaderProps } from "./CardHeader";
export { CardDividerProps } from "./CardDivider";
export { LinkActionProps } from "./LinkAction";
export { DoubleActionProps } from "./DoubleAction";
export {
  OutlineCard,
  FilledCard,
  OutlineFilledCard,
  CardHeader,
  CardImage,
  CardDivider,
  LinkAction,
  DoubleAction,
};
