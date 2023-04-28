import { Container, Image, Text, Col } from "@nextui-org/react";
import { useRouteError } from "react-router-dom";
import comet from "../assets/comet_3d.png";
import Background from "../component/Background";


export default function ErrorPage() {
	const error: any = useRouteError();
	console.error(error);

	return (
		<Container>
			<Background/>
			<Container fluid display="flex" alignItems="center" justify="center" css={{ height: "100vh" }} >
				<Col span={2}>
					<Image
						width={200}
						height={200}
						src={comet}
						alt="Comet"
						containerCss={{ margin: "0 1vh 0 auto" }}
					/>
				</Col>
				<Col span={4} css={{ pt: "2.5vh" }}>
					<Text h1>Oops!</Text>
					<Text h3>Sorry, an unexpected error has occurred.</Text>
					<Text h4> {`${error.status} | ${error.statusText}` || error.message} </Text>
				</Col>
			</Container>
		</Container>
	);
}
