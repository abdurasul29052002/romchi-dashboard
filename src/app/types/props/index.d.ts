import { IconType } from "react-icons";

class Item {
  name: string
  url: string
  icon: IconType
  open: boolean

  constructor(name: string, icon: IconType, open: boolean) {
    this.name = name;
    this.icon = icon;
    this.open = open;
  }
}

export class ParentItemProps extends Item {
  childItems: ChildItemProps[]
}

export class ChildItemProps extends Item {
  visible: boolean = false


  constructor(name: string, icon: IconType, open: boolean, visible: boolean) {
    super(name, icon, open);
    this.visible = visible;
  }
}