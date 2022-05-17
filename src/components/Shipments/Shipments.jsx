import { Card, Row} from "react-bootstrap"
import "../Shipments/Shipments.css"
import Ships from "../Shipments.json"
const Shipments =()=>{
    return(
        Ships && Ships.map( Ships=>{
            return(
                <Card className="shadow" id="Shipments" key={Ships.ShipmentNumber}>
                    <Row className="mx-1 mt-2">
                        <div className="col">
                            <h2>Shipment Number</h2>
                            <p>{Ships.ShipmentNumber}</p>
                            <h2>Freighty Bill number</h2>
                            <p>{Ships.FreightyBillNumber}</p>
                            <h2>Status</h2>
                            <p>{Ships.Status}</p>
                        </div>
                        <div className="col">
                            <h2>Origin</h2>
                            <p>{Ships.Origin}</p>
                        </div>
                        <div className="col">
                            <h2>Transportation Provider</h2>
                            <p>{Ships.TransportationProvider}</p>
                            <h2>Expected Ship date</h2>
                            <p>{Ships.ExpectedShipDate}</p>
                        </div>
                        <div className="col" id="destination">
                            <h2>Destination</h2>
                            <p>{Ships.Destination}</p>
                        </div>
                        <div className="col">
                            <h2>Terms</h2>
                            <p>{Ships.Terms}</p>
                            <h2>Total Weight</h2>
                            <p>{Ships.TotalWeight}</p>
                            <h2>Qtry</h2>
                            <p>{Ships.Qtry}</p>
                        </div>
                        <div className="col" id="cost">
                            <h2>Cost</h2>
                            <p id="shipCost">USD {Ships.Cost}</p>
                            <button id="editButton" className="mt-4">EDIT</button>
                        </div>
                    </Row>
                </Card>
            )
        })
    )
}
export default Shipments;