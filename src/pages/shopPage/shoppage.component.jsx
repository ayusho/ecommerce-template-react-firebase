import React from "react";
import "./shoppage.styles.scss";
import Directory from "../../components/directory/directory.component";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import SHOP_DATA from "./shop.data";
// import "./shoppage.styles.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections
          .map(({ id, ...otherCollections }) => (
            <CollectionPreview key={id} {...otherCollections} />
          ))}
      </div>
    );
  }
}

export default ShopPage;
