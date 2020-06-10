import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          imageUrl:
            "https://img6.craftsvilla.com/image/upload/w_500/C/V/CV-35471-MPUSH96768196710-Jewellery-Pushpa_valli_-1515850280-Craftsvilla_1.jpg",
          title: "Jewellery",
        },
        {
          id: 2,
          imageUrl:
            "https://static1.bigstockphoto.com/9/2/3/large1500/329892133.jpg",
          title: "Accessories",
        },
        {
          id: 3,
          imageUrl:
            "https://previews.123rf.com/images/freebird2000/freebird20001707/freebird2000170700152/82823496-collection-of-women-s-shoes-on-blue-background.jpg",
          title: "Footwear",
        },
        {
          id: 4,
          imageUrl:
            "https://img.scoop.it/zdnrrTagvfsO_hpMc9fXkzl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9",
          title: "Ethnic",
          size: "large",
        },
        {
          id: 5,
          imageUrl: "https://cdn.openpr.com/T/4/T410548700_g.jpg",
          title: "Western",
          size: "large",
        },
        {
          id: 1,
          imageUrl:
            "https://img6.craftsvilla.com/image/upload/w_500/C/V/CV-35471-MPUSH96768196710-Jewellery-Pushpa_valli_-1515850280-Craftsvilla_1.jpg",
          title: "Jewellery",
          size: "large"
        },
        {
          id: 2,
          imageUrl:
            "https://static1.bigstockphoto.com/9/2/3/large1500/329892133.jpg",
          title: "Accessories",
        },
        {
          id: 3,
          imageUrl:
            "https://previews.123rf.com/images/freebird2000/freebird20001707/freebird2000170700152/82823496-collection-of-women-s-shoes-on-blue-background.jpg",
          title: "Footwear",
        },
      ],
    };
  }
  render() {
    let { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ id, ...sections }) => (
          <MenuItem key={id} {...sections} />
        ))}
      </div>
    );
  }
}

export default Directory;
