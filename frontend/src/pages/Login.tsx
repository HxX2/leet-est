import { Card, Container, Row, Text, Image, Button, Spacer, Link } from "@nextui-org/react";
import Hello from "../assets/waving_hand_3d_default.png";
import { FtIcon } from "../icons/FtIcon";
import Background from "../component/Background";


export default function Login() {
	const theme = window.localStorage.getItem('data-theme');
	const buttonCss = theme === 'dark' ? { color: "$black", bg: "$white" } : { color: "$white", bg: "$black" };


	return (
		<Container>
			<Background />
			<Container fluid display="flex" alignItems="center" justify="center" css={{ height: "100vh" }}>
				<Card css={{ p: "$6", mw: "400px", mh: "600px" }}>
					<Card.Body>
						<Row justify="center" align="center" wrap="wrap">
							<Image
								width={200}
								height={150}
								src={Hello}
								alt="hello"
								css={{ margin: "0 0 0 -2vh" }}
							/>
							<Text h1 >Welcome back</Text>
							<Text h6 >leet us help you estimate the future</Text>
							<Spacer x={10} y={1} />
							<Link href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-9fa115eac3b20757dd228a8e2aa97b9c7b7923e89b9746d127f68f4e42d47f97&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback&response_type=code">
								<Button auto css={buttonCss} icon={<FtIcon />}>
									<Text css={{ color: "inherit" }} size={13} weight="bold">
										Continue with Intra
									</Text>
								</Button>
							</Link>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</Container>
	)
}