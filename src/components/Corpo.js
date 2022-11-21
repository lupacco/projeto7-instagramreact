import SideBar from "./SideBar";
import Stories from "./Stories";
import Posts from "./Posts";
import catanacomics from "../assets/img/catanacomics.svg"

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <SideBar userImg={catanacomics} userNick="catanacomics" userName="Catana"/>
    </div>
  );
}
