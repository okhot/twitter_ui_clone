import React from "react";
import style from './bottom.module.css'

export default function BottomNav() {
  return (
    <div className={style.bottomnav}>
      <span class="material-symbols-rounded icon">home</span>
      <span class="material-symbols-rounded">search</span>
      <span class="material-symbols-rounded">notifications</span>
      <span class="material-symbols-rounded">mail</span>
    </div>
  );
}
