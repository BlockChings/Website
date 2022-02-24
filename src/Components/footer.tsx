
import {
Box,
Container,
Row,
} from "./FooterStyles";
import "./Icons.css";

const Footer = () => {
return (
	<Box>
	<Container>
		<br></br>
		<Row>
			<a href="#" className="fa fa-facebook">
			</a>
			<a href="#" className="fa fa-twitter">
			</a>
			<a href="#" className="fa fa-instagram">
			</a>
		</Row>
		<br></br>
	</Container>
	</Box>
);
};
export default Footer;