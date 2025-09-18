import React, { useContext } from "react";
import { SettingContext } from "../context/SettingContext";

const KuchBhi = () => {
  const { settings } = useContext(SettingContext);
  return (
    <div style={{ fontSize: settings.fontSize }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat velit
      fugit obcaecati at. Ullam iure magni voluptas neque aperiam velit nostrum
      voluptatibus tempore, libero corrupti molestias corporis cupiditate
      numquam excepturi non pariatur nisi autem, enim recusandae necessitatibus!
      Distinctio veniam delectus velit nam expedita quidem, ex ab voluptas dolor
      impedit rerum hic inventore laborum facere, vitae commodi ea alias ipsum.
      Reiciendis doloremque optio in tempore porro dolores incidunt at, ipsam,
      earum autem id dolorem consequuntur quaerat. Repellat, explicabo. Adipisci
      reprehenderit deserunt dolorem aliquid magni quo excepturi a consequuntur
      doloremque quae. Facilis harum saepe quas sequi porro unde inventore
      quidem quaerat ratione?
    </div>
  );
};

export default KuchBhi;
