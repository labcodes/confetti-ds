import React from "react";

import { IconTypes, IconColorTypes } from "./constants";
import {
  Accessibility20Regular,
  Add20Regular,
  AddCircle20Regular,
  AddSquare20Regular,
  AddSquareMultiple20Regular,
  Alert20Regular,
  AlertBadge20Regular,
  AlertOff20Regular,
  AnimalCat20Regular,
  AnimalDog20Regular,
  AnimalRabbit20Regular,
  AnimalTurtle20Regular,
  AppFolder20Regular,
  Folder20Regular,
  FolderOpen20Regular,
  ThumbDislike20Regular,
  ThumbLike20Regular,
  Laptop20Regular,
  AppsList20Regular,
  Archive20Regular,
  ArrowCircleDown20Regular,
  ArrowCircleLeft20Regular,
  ArrowCircleRight20Regular,
  ArrowCircleUp20Regular,
  ArrowClockwise20Regular,
  ArrowEnter20Regular,
  ArrowExit20Regular,
  ArrowExpand20Regular,
  ArrowLeft20Regular,
  ArrowRight20Regular,
  ArrowUp20Regular,
  ArrowDown20Regular,
  ArrowSort20Regular,
  ArrowTrendingDown20Regular,
  Book20Regular,
  BookAdd20Regular,
  BookClock20Regular,
  BookExclamationMark20Regular,
  BookInformation20Regular,
  BookQuestionMark20Regular,
  BookOpen20Regular,
  BookOpenMicrophone20Regular,
  BookSearch20Regular,
  BookStar20Regular,
  BookmarkAdd20Regular,
  BookmarkMultiple20Regular,
  Bot20Regular,
  BowlChopsticks20Regular,
  BowlSalad20Regular,
  Box20Regular,
  Bug20Regular,
  Building20Regular,
  BuildingBank20Regular,
  BuildingShop20Regular,
  Balloon20Regular,
  Beaker20Regular,
  BeakerEdit20Regular,
  BeakerOff20Regular,
  Bluetooth20Regular,
  BluetoothConnected20Regular,
  BluetoothDisabled20Regular,
  Call20Regular,
  CallEnd20Regular,
  CloudArrowUp20Regular,
  Camera20Regular,
  Cart20Regular,
  Chat20Regular,
  CheckmarkCircle20Regular,
  CheckmarkSquare20Regular,
  CheckmarkStarburst20Regular,
  Key20Regular,
  DocumentHeart20Regular,
  TextFont20Regular,
  ChatEmpty20Regular,
  CalligraphyPen20Regular,
  CaretLeft20Regular,
  CaretRight20Regular,
  CaretUp20Regular,
  CaretDown20Regular,
  ChevronUp20Regular,
  ChevronDown20Regular,
  ChevronRight20Regular,
  ChevronLeft20Regular,
  Circle20Regular,
  Clipboard20Regular,
  ClosedCaption20Regular,
  ContactCard20Regular,
  Cookies20Regular,
  DataPie20Regular,
  DataTreemap20Regular,
  DataTrending20Regular,
  DataUsage20Regular,
  Desktop20Regular,
  DismissCircle20Regular,
  DismissSquare20Regular,
  Document20Regular,
  DocumentRibbon20Regular,
  Earth20Regular,
  Flag20Regular,
  FoodApple20Regular,
  FoodCake20Regular,
  FoodEgg20Regular,
  FoodGrains20Regular,
  Gauge20Regular,
  Globe20Regular,
  Handshake20Regular,
  HatGraduation20Regular,
  Headphones20Regular,
  Heart20Regular,
  HeartCircle20Regular,
  History20Regular,
  Home20Regular,
  Image20Regular,
  Incognito20Regular,
  Info20Regular,
  Javascript20Regular,
  Location20Regular,
  LockClosed20Regular,
  LockOpen20Regular,
  Mail20Regular,
  MailRead20Regular,
  MailUnread20Regular,
  Megaphone20Regular,
  Mention20Regular,
  MicOff20Regular,
  MoreCircle20Regular,
  MyLocation20Regular,
  News20Regular,
  Note20Regular,
  Organization20Regular,
  People20Regular,
  Clock20Regular,
  ClockAlarm20Regular,
  Dismiss20Regular,
  Checkmark20Regular,
  ArrowMinimize20Regular,
  ArrowMaximize20Regular,
  Backspace20Regular,
  Important20Regular,
  Edit20Regular,
  PeopleTeam20Regular,
  Person20Regular,
  PersonAdd20Regular,
  PersonBoard20Regular,
  PersonCircle20Regular,
  PhoneDesktop20Regular,
  Pin20Regular,
  PinOff20Regular,
  Poll20Regular,
  Power20Regular,
  Premium20Regular,
  Prohibited20Regular,
  RadioButton20Regular,
  Receipt20Regular,
  Reward20Regular,
  Ribbon20Regular,
  RibbonStar20Regular,
  Rocket20Regular,
  PuzzlePiece20Regular,
  QrCode20Regular,
  QuestionCircle20Regular,
  ArrowTrending20Regular,
  Lightbulb20Regular,
  ProjectionScreen20Regular,
  Eye20Regular,
  EyeOff20Regular,
  Search20Regular,
  Delete20Regular,
  Navigation20Regular,
  Link20Regular,
  Save20Regular,
  Savings20Regular,
  Send20Regular,
  Tag20Regular,
  Teddy20Regular,
  Temperature20Regular,
  TextSortAscending20Regular,
  TextSortDescending20Regular,
  Timer20Regular,
  Toolbox20Regular,
  TopSpeed20Regular,
  Trophy20Regular,
  VehicleTruckProfile20Regular,
  Video20Regular,
  Wand20Regular,
  Warning20Regular,
  Wifi120Regular,
  Subtract20Regular,
  WifiOff20Regular,
  SendCopy20Regular,
  ServiceBell20Regular,
  ShareAndroid20Regular,
  Wrench20Regular,
  WrenchScrewdriver20Regular,
  Shield20Regular,
  ShieldCheckmark20Regular,
  ShieldError20Regular,
  ShieldLock20Regular,
  ShieldTask20Regular,
  ShoppingBag20Regular,
  Signature20Regular,
  Sparkle20Regular,
  SubtractSquare20Regular,
  SubtractCircle20Regular,
  SubtractSquareMultiple20Regular,
  Filter20Regular,
  Settings20Regular,
  Bookmark20Regular,
  WindowApps20Regular,
  Cube20Regular,
  CodeBlock20Regular,
  ErrorCircle20Regular,
  SignOut20Regular,
  StackStar20Regular,
  CalendarLtr20Regular,
  Money20Regular,
  Open20Regular,
  GridDots20Regular,
  Phone20Regular,
  Wallet20Regular,
  Cloud20Regular,
  Mic20Regular,
  CloudFlow20Regular,
  Star20Regular,
  Code20Regular
} from "@fluentui/react-icons";
export interface IconProps {
  /** Type of the Icon to be rendered. */
  type: IconTypes;
  /** Color of the rendered Icon. */
  color?: IconColorTypes;
  /** Add a class name to make custom changes */
  className?: string;
}
export default function Icon({ type, color, className }: IconProps) {
  let IconComponent;

  if (type === "Accessibility") IconComponent = Accessibility20Regular;

  if (type === "Add") IconComponent = Add20Regular;

  if (type === "AddCircle") IconComponent = AddCircle20Regular;

  if (type === "AddSquare") IconComponent = AddSquare20Regular;

  if (type === "AddSquareMultiple") IconComponent = AddSquareMultiple20Regular;

  if (type === "Alert") IconComponent = Alert20Regular;

  if (type === "AlertBadge") IconComponent =  AlertBadge20Regular;

  if (type === "AlertOff") IconComponent = AlertOff20Regular;

  if (type === "AnimalCat") IconComponent = AnimalCat20Regular;

  if (type === "AnimalDog") IconComponent = AnimalDog20Regular;

  if (type === "AnimalRabbit") IconComponent = AnimalRabbit20Regular;

  if (type === "AnimalTurtle") IconComponent = AnimalTurtle20Regular;

  if (type === "AppFolder") IconComponent = AppFolder20Regular;

  if (type === "AppsList") IconComponent = AppsList20Regular;

  if (type === "Archive") IconComponent = Archive20Regular;

  if (type === "ArrowCircleDown") IconComponent = ArrowCircleDown20Regular;

  if (type === "ArrowCircleLeft") IconComponent = ArrowCircleLeft20Regular;

  if (type === "ArrowCircleRight") IconComponent = ArrowCircleRight20Regular;

  if (type === "ArrowCircleUp") IconComponent = ArrowCircleUp20Regular;

  if (type === "ArrowClockwise") IconComponent = ArrowClockwise20Regular;

  if (type === "ArrowClockwise" ) IconComponent = ArrowClockwise20Regular;

  if (type === "ArrowDown") IconComponent = ArrowDown20Regular;

  if (type === "ArrowEnter") IconComponent = ArrowEnter20Regular;

  if (type === "ArrowExit") IconComponent = ArrowExit20Regular;

  if (type === "ArrowExpand") IconComponent = ArrowExpand20Regular;

  if (type === "ArrowLeft" ) IconComponent = ArrowLeft20Regular;

  if (type === "ArrowMinimize") IconComponent = ArrowMinimize20Regular;

  if (type === "ArrowMaximize") IconComponent = ArrowMaximize20Regular;

  if (type === "ArrowRight" ) IconComponent = ArrowRight20Regular;

  if (type === "ArrowSort" ) IconComponent = ArrowSort20Regular;

  if (type === "ArrowTrending" ) IconComponent = ArrowTrending20Regular;

  if (type === "ArrowTrendingDown") IconComponent = ArrowTrendingDown20Regular;

  if (type === "ArrowUp" ) IconComponent = ArrowUp20Regular;

  if (type === "Backspace" ) IconComponent = Backspace20Regular;


  if (type === "Balloon") IconComponent = Balloon20Regular;

  if (type === "Beaker") IconComponent = Beaker20Regular;

  if (type === "BeakerEdit") IconComponent = BeakerEdit20Regular;

  if (type === "BeakerOff") IconComponent = BeakerOff20Regular;

  if (type === "Bluetooth") IconComponent = Bluetooth20Regular;

  if (type === "BluetoothConnected") IconComponent = BluetoothConnected20Regular;

  if (type === "BluetoothDisabled") IconComponent = BluetoothDisabled20Regular;

  if (type === "Book") IconComponent = Book20Regular;

  if (type === "BookAdd") IconComponent = BookAdd20Regular;

  if (type === "BookClock") IconComponent = BookClock20Regular;

  if (type === "BookExclamationMark") IconComponent = BookExclamationMark20Regular;

  if (type === "BookInformation") IconComponent = BookInformation20Regular;

  if (type === "BookOpen") IconComponent = BookOpen20Regular;

  if (type === "BookOpenMicrophone") IconComponent = BookOpenMicrophone20Regular;

  if (type === "BookQuestionMark") IconComponent = BookQuestionMark20Regular;

  if (type === "BookSearch") IconComponent = BookSearch20Regular;

  if (type === "BookStar") IconComponent = BookStar20Regular;

  if (type === "Bookmark" ) IconComponent = Bookmark20Regular;

  if (type === "BookmarkAdd") IconComponent = BookmarkAdd20Regular;

  if (type === "BookmarkMultiple") IconComponent = BookmarkMultiple20Regular;

  if (type === "Bot") IconComponent = Bot20Regular;

  if (type === "BowlChopsticks") IconComponent = BowlChopsticks20Regular;

  if (type === "BowlSalad") IconComponent = BowlSalad20Regular;

  if (type === "Box") IconComponent = Box20Regular;

  if (type === "Bug") IconComponent = Bug20Regular;

  if (type === "Building") IconComponent = Building20Regular;

  if (type === "BuildingBank" ) IconComponent = BuildingBank20Regular;

  if (type === "BuildingShop" ) IconComponent = BuildingShop20Regular;

  if (type === "CalendarLtr" ) IconComponent = CalendarLtr20Regular;

  if (type === "CalligraphyPen" ) IconComponent = CalligraphyPen20Regular;

  if (type === "Call") IconComponent = Call20Regular;

  if (type === "CallEnd") IconComponent = CallEnd20Regular;

  if (type === "Camera") IconComponent = Camera20Regular;

  if (type === "CaretDown") IconComponent = CaretDown20Regular;

  if (type === "CaretLeft" ) IconComponent = CaretLeft20Regular;

  if (type === "CaretRight" ) IconComponent = CaretRight20Regular;

  if (type === "CaretUp") IconComponent = CaretUp20Regular;

  if (type === "Cart") IconComponent = Cart20Regular;

  if (type === "Chat") IconComponent = Chat20Regular;

  if (type === "ChatEmpty" ) IconComponent = ChatEmpty20Regular;

  if (type === "Checkmark") IconComponent = Checkmark20Regular;

  if (type === "CheckmarkCircle") IconComponent = CheckmarkCircle20Regular;

  if (type === "CheckmarkSquare") IconComponent = CheckmarkSquare20Regular;

  if (type === "CheckmarkStarburst") IconComponent = CheckmarkStarburst20Regular;

  if (type === "ChevronDown") IconComponent = ChevronDown20Regular;

  if (type === "ChevronLeft") IconComponent = ChevronLeft20Regular;

  if (type === "ChevronRight") IconComponent = ChevronRight20Regular;

  if (type === "ChevronUp") IconComponent = ChevronUp20Regular;

  if (type === "Circle") IconComponent = Circle20Regular;

  if (type === "Clipboard") IconComponent = Clipboard20Regular;

  if (type === "Clock" ) IconComponent = Clock20Regular;

  if (type === "ClockAlarm") IconComponent = ClockAlarm20Regular;

  if (type === "ClosedCaption") IconComponent = ClosedCaption20Regular;

  if (type === "Cloud" ) IconComponent = Cloud20Regular;

  if (type === "CloudArrowUp" ) IconComponent = CloudArrowUp20Regular;

  if (type === "CloudFlow" ) IconComponent = CloudFlow20Regular;

  if (type === "Code") IconComponent = Code20Regular;

  if (type === "CodeBlock" ) IconComponent = CodeBlock20Regular;

  if (type === "ContactCard") IconComponent = ContactCard20Regular;

  if (type === "Cookies") IconComponent = Cookies20Regular;

  if (type === "Cube" ) IconComponent = Cube20Regular;

  if (type === "DataPie") IconComponent = DataPie20Regular;

  if (type === "DataTreemap") IconComponent = DataTreemap20Regular;

  if (type === "DataTrending") IconComponent = DataTrending20Regular;

  if (type === "DataUsage") IconComponent = DataUsage20Regular;

  if (type === "Delete" ) IconComponent = Delete20Regular;

  if (type === "Desktop") IconComponent = Desktop20Regular;

  if (type === "Dismiss" ) IconComponent = Dismiss20Regular;

  if (type === "DismissCircle") IconComponent = DismissCircle20Regular;

  if (type === "DismissSquare" ) IconComponent = DismissSquare20Regular;

  if (type === "Document") IconComponent = Document20Regular;

  if (type === "DocumentHeart" ) IconComponent = DocumentHeart20Regular;

  if (type === "DocumentRibbon") IconComponent = DocumentRibbon20Regular;

  if (type === "Earth") IconComponent = Earth20Regular;

  if (type === "Edit" ) IconComponent = Edit20Regular;

  if (type === "ErrorCircle" ) IconComponent = ErrorCircle20Regular;

  if (type === "Eye" ) IconComponent = Eye20Regular;

  if (type === "EyeOff" ) IconComponent = EyeOff20Regular;

  if (type === "Filter" ) IconComponent = Filter20Regular;

  if (type === "Flag") IconComponent = Flag20Regular;

  if (type === "Folder") IconComponent = Folder20Regular;

  if (type === "FolderOpen") IconComponent = FolderOpen20Regular;

  if (type === "FoodApple") IconComponent = FoodApple20Regular;

  if (type === "FoodCake") IconComponent = FoodCake20Regular;

  if (type === "FoodEgg") IconComponent = FoodEgg20Regular;

  if (type === "FoodGrains") IconComponent = FoodGrains20Regular;

  if (type === "Gauge") IconComponent = Gauge20Regular;

  if (type === "Globe") IconComponent = Globe20Regular;

  if (type === "GridDots" ) IconComponent = GridDots20Regular;

  if (type === "Handshake") IconComponent = Handshake20Regular;

  if (type === "HatGraduation") IconComponent = HatGraduation20Regular;

  if (type === "Headphones") IconComponent = Headphones20Regular;

  if (type === "Heart" ) IconComponent = Heart20Regular;

  if (type === "HeartCircle") IconComponent = HeartCircle20Regular;

  if (type === "History") IconComponent = History20Regular;

  if (type === "Home") IconComponent = Home20Regular;

  if (type === "Image") IconComponent = Image20Regular;

  if (type === "Important" ) IconComponent = Important20Regular;

  if (type === "Incognito") IconComponent = Incognito20Regular;

  if (type === "Info") IconComponent = Info20Regular;

  if (type === "Javascript" ) IconComponent = Javascript20Regular;

  if (type === "Key" ) IconComponent = Key20Regular;

  if (type === "Laptop") IconComponent = Laptop20Regular;

  if (type === "Lightbulb" ) IconComponent = Lightbulb20Regular;

  if (type === "Link") IconComponent = Link20Regular;

  if (type === "Location") IconComponent = Location20Regular;

  if (type === "LockClosed") IconComponent = LockClosed20Regular;

  if (type === "LockOpen") IconComponent = LockOpen20Regular;

  if (type === "Mail") IconComponent = Mail20Regular;

  if (type === "MailRead") IconComponent = MailRead20Regular;

  if (type === "MailUnread") IconComponent = MailUnread20Regular;

  if (type === "Megaphone") IconComponent = Megaphone20Regular;

  if (type === "Mention") IconComponent = Mention20Regular;

  if (type === "Mic" ) IconComponent = Mic20Regular;

  if (type === "MicOff") IconComponent = MicOff20Regular;

  if (type === "Money" ) IconComponent = Money20Regular;

  if (type === "MoreCircle") IconComponent = MoreCircle20Regular;

  if (type === "MyLocation") IconComponent = MyLocation20Regular;

  if (type === "Navigation") IconComponent = Navigation20Regular;

  if (type === "News") IconComponent = News20Regular;

  if (type === "Note") IconComponent = Note20Regular;

  if (type === "Open" ) IconComponent = Open20Regular;

  if (type === "Organization") IconComponent = Organization20Regular;

  if (type === "People") IconComponent = People20Regular;

  if (type === "PeopleTeam") IconComponent = PeopleTeam20Regular;

  if (type === "Person") IconComponent = Person20Regular;

  if (type === "PersonAdd") IconComponent = PersonAdd20Regular;

  if (type === "PersonBoard") IconComponent = PersonBoard20Regular;

  if (type === "PersonCircle") IconComponent = PersonCircle20Regular;

  if (type === "Phone" ) IconComponent = Phone20Regular;

  if (type === "PhoneDesktop") IconComponent = PhoneDesktop20Regular;

  if (type === "Pin") IconComponent = Pin20Regular;

  if (type === "PinOff") IconComponent = PinOff20Regular;

  if (type === "Poll") IconComponent = Poll20Regular;

  if (type === "Power") IconComponent = Power20Regular;

  if (type === "Premium") IconComponent = Premium20Regular;

  if (type === "Prohibited") IconComponent = Prohibited20Regular;

  if (type === "ProjectionScreen" ) IconComponent = ProjectionScreen20Regular;

  if (type === "PuzzlePiece") IconComponent = PuzzlePiece20Regular;

  if (type === "QrCode") IconComponent = QrCode20Regular;

  if (type === "QuestionCircle") IconComponent = QuestionCircle20Regular;

  if (type === "RadioButton") IconComponent = RadioButton20Regular;

  if (type === "Receipt") IconComponent = Receipt20Regular;

  if (type === "Reward") IconComponent = Reward20Regular;

  if (type === "Ribbon") IconComponent = Ribbon20Regular;

  if (type === "RibbonStar") IconComponent = RibbonStar20Regular;

  if (type === "Rocket") IconComponent = Rocket20Regular;

  if (type === "Save") IconComponent = Save20Regular;

  if (type === "Savings") IconComponent = Savings20Regular;

  if (type === "Search" ) IconComponent = Search20Regular;

  if (type === "Send") IconComponent = Send20Regular;

  if (type === "SendCopy") IconComponent = SendCopy20Regular;

  if (type === "ServiceBell") IconComponent = ServiceBell20Regular;

  if (type === "Settings" ) IconComponent = Settings20Regular;

  if (type === "ShareAndroid") IconComponent = ShareAndroid20Regular;

  if (type === "Shield") IconComponent = Shield20Regular;

  if (type === "ShieldCheckmark") IconComponent = ShieldCheckmark20Regular;

  if (type === "ShieldError") IconComponent = ShieldError20Regular;

  if (type === "ShieldLock") IconComponent = ShieldLock20Regular;

  if (type === "ShieldTask") IconComponent = ShieldTask20Regular;

  if (type === "ShoppingBag") IconComponent = ShoppingBag20Regular;

  if (type === "SignOut" ) IconComponent = SignOut20Regular;

  if (type === "Signature") IconComponent = Signature20Regular;

  if (type === "Sparkle") IconComponent = Sparkle20Regular;

  if (type === "StackStar" ) IconComponent = StackStar20Regular;

  if (type === "Star") IconComponent = Star20Regular;

  if (type === "Subtract") IconComponent = Subtract20Regular;

  if (type === "SubtractCircle") IconComponent = SubtractCircle20Regular;

  if (type === "SubtractSquare") IconComponent = SubtractSquare20Regular;

  if (type === "SubtractSquareMultiple") IconComponent = SubtractSquareMultiple20Regular;

  if (type === "Tag") IconComponent = Tag20Regular;

  if (type === "Teddy") IconComponent = Teddy20Regular;

  if (type === "Temperature") IconComponent = Temperature20Regular;

  if (type === "TextFont" ) IconComponent = TextFont20Regular;

  if (type === "TextSortAscending") IconComponent = TextSortAscending20Regular;

  if (type === "TextSortDescending") IconComponent  = TextSortDescending20Regular;

  if (type === "ThumbDislike") IconComponent  = ThumbDislike20Regular;

  if (type === "ThumbLike") IconComponent = ThumbLike20Regular;

  if (type === "Timer") IconComponent = Timer20Regular;

  if (type === "Toolbox") IconComponent = Toolbox20Regular;

  if (type === "TopSpeed") IconComponent = TopSpeed20Regular;

  if (type === "Trophy") IconComponent = Trophy20Regular;

  if (type === "VehicleTruckProfile") IconComponent = VehicleTruckProfile20Regular;

  if (type === "Video") IconComponent = Video20Regular;

  if (type === "Wallet" ) IconComponent = Wallet20Regular;

  if (type === "Wand") IconComponent = Wand20Regular;

  if (type === "Warning") IconComponent = Warning20Regular;

  if (type === "Wifi") IconComponent = Wifi120Regular;

  if (type === "WifiOff") IconComponent  = WifiOff20Regular;

  if (type === "WindowApps") IconComponent = WindowApps20Regular;

  if (type === "Wrench") IconComponent  = Wrench20Regular;

  if (type === "WrenchScrewDriver") IconComponent  = WrenchScrewdriver20Regular;

  if (!IconComponent) return null;

  return (
    <span
      className={`lab-icon lab-icon--${type} ${
        color ? `lab-icon--${color}` : ""
      } ${className ? className : ""}`}
    >
      <IconComponent />
    </span>
  );
}
