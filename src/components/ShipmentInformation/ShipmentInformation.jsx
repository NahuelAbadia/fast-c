import { Card, Row } from "react-bootstrap"
import ShipInfo from "../ShipmentBox.json"
import "./ShipmentInformation.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

const ShipmentInformation =()=>{
    return(
        ShipInfo && ShipInfo.map(shipment =>{
            return(
                <Card key={shipment.key} id="shipInfo" className="col mb-1">
                    <Row>
                        <div className="col-6">
                            <FontAwesomeIcon icon={faChartSimple} id="shipIcon"/>
                        </div>
                        <div className="col-6">
                            <p id="shipValue">{shipment.value}</p>    
                        </div>
                    </Row>
                    <Row>
                        <div className="col">
                            <p id="shipCaption">{shipment.caption}</p>
                        </div>
                    </Row>
                </Card>
            )
        })
    )
}
export default ShipmentInformation;