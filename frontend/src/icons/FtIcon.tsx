export const FtIcon = ({
	fill = "currentColor",
	size = 24,
	height = 24,
	width = 24,
	label = "FortyTwo Icon",
	...props
  }) => {
	  return (
		<svg
		  width={size || width || 24}
		  height={size || height || 24}
		  viewBox="0 -200 960 960"
		  {...props}
		>
		  <g fill={fill}>
		    <path d="M32 412.6h330.1V578h164.7V279.1H197.3L526.8-51.1H362.1L32 279.1zM597.9 114.2L762.7-51.1H597.9zM762.7 114.2L597.9 279.1v164.8h164.8V279.1L928 114.2V-51.1H762.7z"></path>
		    <path d="M928 279.1L762.7 443.9H928z"></path>
		  </g>
		</svg>
	  );
  };