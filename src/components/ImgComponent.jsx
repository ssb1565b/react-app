import React, { Component } from "react";

// function ImgComponent() {
//   return (
//     <div>
//       <img src="/IMG_6730.jpg" />
//       {/* public폴더가 static이라 이렇게 해도 뜸 */}
//     </div>
//   );
// }
class ImgComponent extends Component {
  render() {
    return <img src="/IMG_6730.jpg" />;
  }
}
export default ImgComponent;
