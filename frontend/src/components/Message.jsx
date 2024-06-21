import { Alert } from "react-bootstrap";

export default function Message() {
  return (
    <Alert variant="danger">
      <h3 className="text-center">Something went wrong. Please try again later.</h3>
    </Alert>
    )
}
