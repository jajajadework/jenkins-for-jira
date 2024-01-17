import React from 'react';
import { cx } from '@emotion/css';

type NoServersConnectedIconProps = {
	containerClassName: string
};

export function NoServersConnectedIcon({ containerClassName }: NoServersConnectedIconProps): JSX.Element {
	return (
		<div className={cx(containerClassName)} data-testid="noServersConnectedIcon">
			<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_953_46834)">
					<mask id="mask0_953_46834" maskUnits="userSpaceOnUse" x="25" y="0" width="151" height="160">
						<path d="M25 0H175.354V160H25V0Z" fill="white"/>
					</mask>
					<g mask="url(#mask0_953_46834)">
					</g>
					<g clip-path="url(#clip1_953_46834)">
						<rect width="138.139" height="160" transform="translate(11)" fill="white" fill-opacity="0.01"/>
						<path opacity="0.3" d="M115.478 160H103.045C101.959 160 101.08 159.122 101.08 158.035C101.08 156.949 101.959 156.07 103.045 156.07H115.478C116.564 156.07 117.443 156.949 117.443 158.035C117.443 159.122 116.564 160 115.478 160Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M91.5008 160H79.0681C77.9816 160 77.103 159.122 77.103 158.035C77.103 156.949 77.9816 156.07 79.0681 156.07H91.5008C92.5872 156.07 93.4658 156.949 93.4658 158.035C93.4658 159.122 92.5872 160 91.5008 160Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M67.5235 160H55.1003C54.0139 160 53.1353 159.122 53.1353 158.035C53.1353 156.949 54.0139 156.07 55.1003 156.07H67.533C68.6194 156.07 69.498 156.949 69.498 158.035C69.498 159.122 68.61 160 67.5235 160Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M43.5554 160H31.1228C30.0363 160 29.1577 159.122 29.1577 158.035C29.1577 156.949 30.0363 156.07 31.1228 156.07H43.5554C44.6419 156.07 45.5205 156.949 45.5205 158.035C45.5205 159.122 44.6419 160 43.5554 160Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M19.5782 160H12.965C11.8786 160 11 159.122 11 158.035V151.422C11 150.336 11.8786 149.457 12.965 149.457C14.0515 149.457 14.9301 150.336 14.9301 151.422V156.07H19.5782C20.6646 156.07 21.5432 156.949 21.5432 158.035C21.5432 159.122 20.6646 160 19.5782 160Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M12.965 140.842C11.8786 140.842 11 139.964 11 138.877V125.367C11 124.281 11.8786 123.402 12.965 123.402C14.0515 123.402 14.9301 124.281 14.9301 125.367V138.877C14.9301 139.964 14.0515 140.842 12.965 140.842Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M12.965 114.784C11.8786 114.784 11 113.905 11 112.818V99.3088C11 98.2224 11.8786 97.3438 12.965 97.3438C14.0515 97.3438 14.9301 98.2224 14.9301 99.3088V112.818C14.9301 113.905 14.0515 114.784 12.965 114.784Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M12.965 88.7305C11.8786 88.7305 11 87.8424 11 86.756V73.2463C11 72.1599 11.8786 71.2812 12.965 71.2812C14.0515 71.2812 14.9301 72.1599 14.9301 73.2463V86.756C14.9301 87.8424 14.0515 88.7305 12.965 88.7305Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M12.965 62.6624C11.8786 62.6624 11 61.7838 11 60.6974V47.1877C11 46.1013 11.8786 45.2227 12.965 45.2227C14.0515 45.2227 14.9301 46.1013 14.9301 47.1877V60.6974C14.9301 61.7838 14.0515 62.6624 12.965 62.6624Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M12.965 36.6077C11.8786 36.6077 11 35.7197 11 34.6427V21.133C11 20.0466 11.8786 19.168 12.965 19.168C14.0515 19.168 14.9301 20.0466 14.9301 21.133V34.6427C14.9301 35.7197 14.0515 36.6077 12.965 36.6077Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M12.965 10.5432C11.8786 10.5432 11 9.66462 11 8.57818V1.96504C11 0.878602 11.8786 0 12.965 0H19.5782C20.6646 0 21.5432 0.878602 21.5432 1.96504C21.5432 3.05149 20.6646 3.93009 19.5782 3.93009H14.9301V8.57818C14.9301 9.66462 14.0515 10.5432 12.965 10.5432Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M115.459 3.93009H103.027C101.94 3.93009 101.062 3.05149 101.062 1.96504C101.062 0.878602 101.94 0 103.027 0H115.459C116.546 0 117.424 0.878602 117.424 1.96504C117.424 3.05149 116.536 3.93009 115.459 3.93009Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M91.482 3.93009H79.0588C77.9724 3.93009 77.0938 3.05149 77.0938 1.96504C77.0938 0.878602 77.9724 0 79.0588 0H91.4915C92.5779 0 93.4565 0.878602 93.4565 1.96504C93.4565 3.05149 92.5685 3.93009 91.482 3.93009Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M67.5138 3.93009H55.0905C54.0041 3.93009 53.1255 3.05149 53.1255 1.96504C53.1255 0.878602 54.0041 0 55.0905 0H67.5232C68.6097 0 69.4883 0.878602 69.4883 1.96504C69.4883 3.05149 68.6002 3.93009 67.5138 3.93009Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M43.546 3.93009H31.1228C30.0363 3.93009 29.1577 3.05149 29.1577 1.96504C29.1577 0.878602 30.0363 0 31.1228 0H43.5554C44.6419 0 45.5205 0.878602 45.5205 1.96504C45.5205 3.05149 44.6324 3.93009 43.546 3.93009Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M133.607 10.5432C132.521 10.5432 131.642 9.66462 131.642 8.57818V3.93009H126.994C125.908 3.93009 125.029 3.05149 125.029 1.96504C125.029 0.878602 125.908 0 126.994 0H133.607C134.694 0 135.573 0.878602 135.573 1.96504V8.57818C135.573 9.66462 134.694 10.5432 133.607 10.5432Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M133.626 114.784C132.54 114.784 131.661 113.905 131.661 112.818V99.3088C131.661 98.2224 132.54 97.3438 133.626 97.3438C134.713 97.3438 135.591 98.2224 135.591 99.3088V112.818C135.591 113.905 134.713 114.784 133.626 114.784Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M133.617 88.721C132.53 88.721 131.652 87.8424 131.652 86.756V73.2463C131.652 72.1599 132.53 71.2812 133.617 71.2812C134.703 71.2812 135.582 72.1599 135.582 73.2463V86.756C135.591 87.8424 134.703 88.721 133.617 88.721Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M133.617 62.6624C132.53 62.6624 131.652 61.7838 131.652 60.6974V47.1877C131.652 46.1013 132.53 45.2227 133.617 45.2227C134.703 45.2227 135.582 46.1013 135.582 47.1877V60.6974C135.582 61.7838 134.703 62.6624 133.617 62.6624Z" fill="#B3BAC5"/>
						<path opacity="0.3" d="M133.617 36.6077C132.53 36.6077 131.652 35.7291 131.652 34.6427V21.133C131.652 20.0466 132.53 19.168 133.617 19.168C134.703 19.168 135.582 20.0466 135.582 21.133V34.6427C135.582 35.7197 134.694 36.6077 133.617 36.6077Z" fill="#B3BAC5"/>
						<path d="M112.653 110.985L106.928 105.336L99.0776 113.291L104.803 118.94C106.267 120.386 107.287 122.209 107.75 124.202C108.213 126.205 109.234 128.028 110.698 129.464L133.91 152.365C137.424 155.832 143.093 155.794 146.56 152.28C150.027 148.765 149.989 143.097 146.475 139.63L123.263 116.729C121.798 115.284 119.966 114.292 117.953 113.848C115.96 113.423 114.118 112.431 112.653 110.985Z" fill="#CFD4DB"/>
						<path d="M112.653 110.988L110.915 109.268C108.714 107.095 105.181 107.124 103.008 109.325C100.835 111.526 100.863 115.06 103.064 117.232L104.803 118.952C106.267 120.397 107.287 122.221 107.75 124.214C108.213 126.217 109.233 128.04 110.698 129.476L133.91 152.377C137.424 155.844 143.093 155.806 146.56 152.291C150.027 148.777 149.989 143.109 146.475 139.642L123.263 116.741C121.798 115.296 119.966 114.304 117.953 113.86C115.96 113.425 114.118 112.433 112.653 110.988Z" fill="url(#paint0_linear_953_46834)"/>
						<path d="M117.727 113.803C115.818 113.34 114.061 112.367 112.653 110.988L110.915 109.268C108.714 107.095 105.181 107.124 103.008 109.325C100.835 111.526 100.863 115.06 103.064 117.232L104.803 118.952C106.201 120.331 107.193 122.069 107.684 123.978C109.592 122.561 111.406 120.983 113.107 119.264C114.798 117.544 116.338 115.721 117.727 113.803Z" fill="#B3BAC5"/>
						<path d="M74.2121 128.722C61.7227 128.807 49.9513 124.017 41.0614 115.25C22.7241 97.1393 22.5258 67.4841 40.6268 49.128C49.394 40.238 61.1086 35.2971 73.5886 35.2121C86.0779 35.127 97.8493 39.9168 106.739 48.6839C115.629 57.4511 120.57 69.1658 120.655 81.6457C120.74 94.1256 115.95 105.906 107.183 114.796C98.4067 123.696 86.7015 128.637 74.2121 128.722ZM48.572 56.9693C41.8928 63.7335 38.2556 72.6991 38.3122 82.2031C38.4445 101.825 54.5144 117.687 74.146 117.564C83.65 117.498 92.5683 113.738 99.2475 106.974C105.927 100.21 109.573 91.2442 109.507 81.7402C109.441 72.2361 105.681 63.3179 98.9169 56.6386C92.1526 49.9593 83.1871 46.3127 73.683 46.3788C64.1601 46.4449 55.2513 50.205 48.572 56.9693Z" fill="url(#paint1_linear_953_46834)"/>
						<path d="M90.5842 70.535L85.7093 65.6223C84.9913 64.8949 83.8199 64.8949 83.0924 65.6129L73.9285 74.7107L64.8496 65.5468C64.1316 64.8193 62.9602 64.8193 62.2327 65.5373L57.3201 70.4121C56.5927 71.1301 56.5927 72.3016 57.3107 73.0291L66.4084 82.193L57.2445 91.2907C56.5171 92.0087 56.5171 93.1802 57.2351 93.9077L62.1099 98.8203C62.8279 99.5477 63.9994 99.5477 64.7268 98.8297L73.8907 89.7319L82.9885 98.8959C83.7065 99.6233 84.878 99.6233 85.6054 98.9053L90.518 94.0305C91.2455 93.3125 91.2455 92.141 90.5275 91.4136L81.4297 82.2496L90.5936 73.1519C91.3022 72.4244 91.3116 71.253 90.5842 70.535Z" fill="#C1C7D0"/>
					</g>
				</g>
				<defs>
					<linearGradient id="paint0_linear_953_46834" x1="101.174" y1="131.023" x2="149.323" y2="131.63" gradientUnits="userSpaceOnUse">
						<stop stop-color="#B3BAC5"/>
						<stop offset="1" stop-color="#DFE1E5" stop-opacity="0.5"/>
					</linearGradient>
					<linearGradient id="paint1_linear_953_46834" x1="40.4357" y1="114.603" x2="107.378" y2="49.3271" gradientUnits="userSpaceOnUse">
						<stop offset="0.5572" stop-color="#C1C7D0"/>
						<stop offset="0.966" stop-color="#E9EBEF" stop-opacity="0.5"/>
					</linearGradient>
					<clipPath id="clip0_953_46834">
						<rect width="160" height="160" fill="white"/>
					</clipPath>
					<clipPath id="clip1_953_46834">
						<rect width="138.139" height="160" fill="white" transform="translate(11)"/>
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}
