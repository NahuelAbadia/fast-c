import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { Row } from "react-bootstrap"
import "./ManageShipments.css"
const ManageShipments =()=>{
    return(
        <div id="manageShipments">
            <Row className="my-2">
                <div className="col-1">
                    <FontAwesomeIcon id="boxIcon" icon={faBoxOpen} />
                </div>
                <div className="col" >
                    <h2 id="ManageH2">Manage Shipments</h2>
                </div>
                <div className="col">
                    <p id="shipNumber">1523</p>
                </div>
            </Row>
        </div>
    )
}
export default ManageShipments;