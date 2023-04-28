import { Container, Image, } from "@nextui-org/react";
import leftGradient from "../assets/gradient-left-dark.svg";
import rightGradient from "../assets/gradient-right-dark.svg";

export default function Background() {
	return(
		<Container>
			<Image
				src={leftGradient}
				alt="gradient"
				containerCss={{ margin: "0", display: "block" }}
				css={{ position: "fixed", top: "-35%", right: "-45%", zIndex: "0", height: "unset" }}
			/>
			<Image
				objectFit="cover"
				src={rightGradient}
				alt="gradient"
				containerCss={{ margin: "0", display: "block" }}
				css={{ position: "fixed", bottom: "-40%", left: "-35%", right: "-50%", zIndex: "0", height: "unset" }}
			/>
		</Container>
	)
}