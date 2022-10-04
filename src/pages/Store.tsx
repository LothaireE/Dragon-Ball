import storeItems from "../data/items.json"
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

const Store = () => {
    return (
        <div>
            <Row md={2} xs={1} lg={3}>
                {storeItems.map((item)=>(
                  <Col key={item.id}>
                     <StoreItem  {...item}/>
                  </Col>   
                ))}
            </Row>
        </div>
    );
};

export default Store;