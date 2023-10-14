/**
 * Renders an SVG icon of the GitHub logo.
 *
 * @component
 *
 * @param {string} className - A CSS class name to be applied to the SVG element.
 * @param {object} rest - Additional props to be spread onto the SVG element.
 *
 * @returns {JSX.Element} The rendered SVG element representing the GitHub logo with the specified class name and any additional props.
 */
export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="496"
    height="496"
    viewBox="0 0 1080.000000 1080.000000"
    xmlSpace="preserve"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g
      transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M5810 8693 c-25 -3 -49 -8 -53 -12 -7 -7 -25 -64 -82 -261 -58 -199
-75 -254 -83 -262 -9 -9 -23 26 -99 247 -19 55 -41 113 -49 128 -7 16 -14 35
-14 43 0 27 -32 93 -48 99 -9 3 -45 3 -80 -1 -70 -7 -84 -21 -97 -99 -3 -22
-11 -49 -16 -60 -13 -29 -69 -210 -86 -279 -8 -33 -20 -68 -27 -78 -12 -17
-13 -17 -23 5 -6 12 -29 78 -53 147 -23 69 -48 139 -55 155 -7 17 -23 62 -35
100 -36 112 -29 106 -123 99 -45 -4 -84 -8 -86 -10 -4 -4 21 -69 45 -117 8
-16 14 -35 14 -44 0 -8 6 -29 14 -46 19 -45 53 -138 59 -162 12 -46 78 -220
87 -229 6 -6 10 -19 10 -30 0 -12 6 -33 14 -47 7 -14 16 -38 20 -54 7 -28 7
-28 68 -21 34 3 75 6 92 6 30 0 32 3 54 73 12 39 22 80 22 89 0 9 4 19 9 22 5
4 12 24 16 47 4 22 13 53 21 67 8 15 14 32 14 38 0 17 51 174 56 174 6 0 41
-82 66 -155 11 -33 26 -73 33 -90 8 -16 18 -46 24 -65 16 -57 49 -147 61 -169
9 -18 20 -21 83 -20 40 0 80 4 91 8 14 5 29 42 58 137 21 71 52 172 68 224 16
52 33 111 36 130 4 19 10 40 14 45 4 6 11 26 15 45 4 19 18 68 31 109 13 40
24 75 24 77 0 4 -36 3 -110 -3z"
      />
      <path
        d="M6135 8346 c-63 -30 -117 -86 -146 -151 -27 -61 -31 -180 -7 -235 25
-59 96 -127 167 -162 61 -30 74 -33 168 -33 83 0 105 3 119 17 16 15 15 20 -7
64 l-24 47 -87 1 c-80 1 -89 3 -125 32 -43 34 -90 121 -75 136 9 9 88 -14 257
-73 36 -13 122 -39 151 -46 48 -11 71 135 37 232 -25 68 -102 144 -177 173
-81 31 -183 30 -251 -2z m190 -107 c22 -6 48 -18 59 -27 30 -27 58 -92 52
-118 -6 -24 -33 -32 -51 -15 -6 5 -41 19 -80 31 -146 46 -156 50 -146 68 14
27 46 52 77 62 40 11 43 11 89 -1z"
      />
      <path
        d="M6919 8339 c-6 -12 -53 -86 -105 -165 -52 -79 -94 -146 -94 -149 0
-2 -13 -24 -29 -47 -68 -100 -129 -196 -156 -245 -34 -60 -36 -55 53 -109 l43
-25 18 23 19 23 17 -43 c20 -48 104 -129 144 -138 14 -3 36 -10 49 -15 35 -14
107 -11 160 6 70 23 133 82 172 162 63 128 49 233 -46 328 -62 63 -103 83
-177 87 -31 1 -57 6 -57 9 0 5 11 22 97 155 18 28 33 60 33 70 0 12 -21 32
-60 57 -33 20 -62 37 -65 37 -2 0 -9 -10 -16 -21z m75 -433 c42 -17 85 -73 93
-118 9 -57 -48 -152 -109 -184 -100 -52 -233 50 -212 162 3 18 18 53 34 77 44
70 119 94 194 63z"
      />
      <path
        d="M4213 8271 c-41 -30 -74 -70 -87 -106 -7 -19 -9 -19 -31 7 l-23 27
-61 -27 c-41 -18 -61 -32 -61 -44 0 -10 38 -95 84 -190 46 -95 95 -198 109
-228 14 -31 35 -64 46 -74 20 -18 22 -18 86 12 56 27 64 34 56 49 -36 67 -113
239 -123 277 -10 38 -10 54 2 88 14 39 30 55 96 94 17 10 16 14 -11 77 -16 37
-32 67 -36 67 -3 0 -24 -13 -46 -29z"
      />
      <path
        d="M3628 7934 c-143 -52 -238 -180 -238 -322 0 -28 5 -54 10 -57 6 -3
10 -16 10 -29 0 -12 13 -42 28 -67 78 -122 239 -168 374 -107 69 32 138 94
174 156 40 67 46 186 14 260 -27 61 -101 135 -166 162 -53 23 -149 25 -206 4z
m160 -164 c90 -65 107 -185 34 -252 -85 -80 -190 -54 -260 63 -28 46 -28 79
-1 132 33 64 68 85 140 86 36 1 55 -6 87 -29z"
      />
      <path
        d="M2935 7635 c-17 -20 -38 -47 -46 -61 -15 -30 -25 -19 120 -133 44
-36 81 -66 81 -67 0 -2 -17 -8 -39 -14 -53 -14 -129 -84 -157 -145 -34 -72
-33 -175 1 -243 31 -61 100 -126 168 -158 66 -30 155 -32 218 -5 101 45 179
149 179 239 0 38 2 43 18 37 40 -17 48 -13 89 39 l43 54 -58 50 c-31 27 -78
64 -103 83 -25 19 -104 79 -175 134 -71 55 -139 107 -150 115 -12 8 -48 36
-80 62 -33 27 -63 48 -68 48 -4 0 -23 -16 -41 -35z m300 -374 c22 -10 56 -35
75 -55 33 -35 35 -42 35 -101 0 -62 -1 -66 -42 -106 -34 -35 -49 -43 -91 -47
-83 -7 -166 55 -187 141 -17 65 33 151 100 175 44 15 65 14 110 -7z"
      />
      <path
        d="M7306 7185 c-51 -48 -55 -101 -10 -150 18 -19 33 -25 67 -25 79 0
122 59 97 134 -22 66 -103 88 -154 41z"
      />
      <path
        d="M8190 6972 c-62 -30 -158 -74 -300 -137 -52 -24 -126 -57 -165 -75
-38 -18 -89 -41 -112 -51 -24 -10 -43 -22 -43 -26 1 -4 15 -37 33 -73 38 -75
43 -76 135 -34 89 41 143 64 151 64 4 0 25 -37 46 -82 21 -46 53 -116 72 -155
18 -40 38 -73 43 -73 20 0 102 43 107 57 3 7 1 19 -5 26 -5 6 -30 59 -55 117
-25 58 -52 118 -61 134 -8 16 -13 33 -10 37 4 7 74 42 152 75 l33 15 24 -55
c21 -48 73 -162 123 -268 9 -21 20 -38 24 -38 8 0 89 36 106 48 11 7 9 17 -7
48 -11 21 -38 82 -61 134 -43 97 -108 239 -138 299 -9 19 -21 36 -27 37 -5 1
-35 -10 -65 -24z"
      />
      <path
        d="M2692 6784 c-54 -27 -99 -79 -135 -158 -24 -54 -49 -168 -45 -208 l3
-33 60 0 60 0 6 58 c9 80 34 141 75 177 35 30 51 35 92 24 26 -7 28 -25 7 -65
-33 -65 -43 -87 -60 -142 -22 -75 -16 -136 19 -182 53 -69 144 -84 216 -36 96
64 144 198 105 294 -6 15 -4 16 20 7 35 -13 42 -7 71 62 17 41 20 56 11 65 -7
6 -70 37 -142 68 -241 105 -274 112 -363 69z m275 -214 c82 -50 48 -220 -45
-220 -61 0 -79 66 -42 149 11 24 20 49 20 55 0 12 20 36 30 36 3 0 19 -9 37
-20z"
      />
      <path
        d="M2186 6202 c-9 -32 -16 -70 -16 -83 0 -27 15 -32 220 -75 86 -18 176
-39 225 -52 98 -28 206 -52 229 -52 13 0 40 -7 61 -16 20 -8 40 -13 43 -10 3
4 11 32 18 64 6 31 15 64 19 73 7 20 -19 30 -131 54 -38 8 -96 21 -129 29 -33
8 -100 24 -150 36 -49 12 -123 28 -163 36 -40 7 -77 16 -82 19 -5 3 -28 9 -52
14 -24 5 -50 12 -59 15 -13 6 -19 -5 -33 -52z"
      />
      <path
        d="M8230 6215 c-52 -13 -158 -37 -235 -54 -77 -17 -151 -33 -164 -36
-20 -5 -22 -10 -18 -38 9 -55 24 -118 29 -123 3 -3 48 5 99 17 216 49 271 50
320 3 15 -15 34 -43 40 -63 6 -20 15 -40 19 -45 13 -14 140 14 140 30 0 27
-49 111 -80 137 -16 14 -30 28 -30 30 0 3 12 8 26 11 26 7 26 9 21 61 -7 68
-21 95 -50 94 -12 -1 -65 -12 -117 -24z"
      />
      <path
        d="M2132 5867 c-6 -7 -13 -42 -17 -79 -8 -79 -20 -72 145 -88 58 -5 141
-14 185 -20 191 -23 344 -40 393 -43 64 -5 77 9 87 95 l7 56 -43 6 c-82 10
-394 45 -439 50 -25 2 -79 9 -120 14 -138 19 -188 21 -198 9z"
      />
      <path
        d="M8095 5763 c-11 -2 -44 -21 -74 -41 -40 -27 -64 -53 -88 -97 -31 -58
-33 -64 -33 -169 0 -89 4 -117 20 -150 30 -63 73 -109 131 -141 48 -27 63 -30
139 -30 73 0 92 4 136 27 68 36 129 106 145 166 39 154 14 272 -75 363 -60 61
-105 79 -201 77 -44 0 -89 -3 -100 -5z m204 -191 c66 -53 77 -149 24 -212 -36
-43 -74 -60 -133 -60 -57 0 -93 15 -132 57 -26 27 -34 65 -30 136 2 35 70 104
109 110 61 11 126 -2 162 -31z"
      />
      <path
        d="M2530 5538 c-74 -17 -138 -70 -182 -153 -18 -34 -21 -57 -22 -150 0
-97 3 -116 24 -159 53 -104 171 -174 278 -163 122 13 177 42 236 124 73 105
68 291 -12 395 -77 102 -183 137 -322 106z m197 -184 c15 -12 36 -43 46 -70
15 -41 16 -55 7 -89 -22 -78 -77 -115 -169 -115 -98 0 -155 55 -156 150 0 68
20 104 76 133 47 25 157 20 196 -9z"
      />
      <path
        d="M7892 5073 c-14 -27 -33 -123 -26 -134 3 -5 16 -9 30 -9 14 0 39 -6
57 -13 18 -7 79 -24 136 -37 92 -22 107 -29 136 -62 45 -49 52 -92 26 -149
-33 -69 -90 -94 -158 -68 -15 6 -48 15 -73 20 -25 5 -84 19 -133 32 -62 17
-90 21 -96 13 -5 -6 -15 -37 -22 -69 -11 -50 -10 -60 3 -73 14 -14 239 -77
343 -95 116 -20 209 30 258 140 22 51 29 169 11 192 -6 8 -14 24 -17 37 -5 21
-3 22 27 17 32 -7 32 -6 49 54 27 96 42 85 -178 136 -60 14 -130 32 -155 41
-25 8 -55 14 -66 14 -12 0 -38 7 -57 15 -48 20 -84 19 -95 -2z"
      />
      <path
        d="M2430 4792 c-30 -8 -56 -16 -58 -18 -2 -1 8 -24 22 -51 24 -48 49
-77 91 -107 22 -16 24 -14 -31 -31 -11 -4 -14 -12 -10 -28 3 -12 11 -46 18
-75 10 -46 15 -53 33 -49 19 5 147 41 250 71 28 8 84 24 125 36 41 11 89 27
105 34 17 8 38 17 47 20 16 5 16 9 2 53 -8 26 -17 61 -21 76 -3 16 -11 26 -18
24 -6 -3 -54 -17 -106 -32 -52 -15 -112 -33 -134 -41 -90 -31 -168 -4 -204 69
-12 24 -21 49 -21 55 0 15 -21 14 -90 -6z"
      />
      <path
        d="M2610 4327 c-52 -22 -80 -45 -80 -63 0 -22 61 -84 104 -106 37 -19
39 -21 21 -34 -10 -8 -23 -14 -27 -14 -12 0 2 -49 29 -102 20 -39 28 -45 41
-38 9 6 28 14 42 20 14 5 32 14 40 19 8 5 49 24 90 43 261 120 329 154 330
163 0 6 -12 38 -26 73 -31 72 -37 74 -120 33 -207 -101 -257 -116 -310 -88
-37 19 -69 54 -80 88 l-9 26 -45 -20z"
      />
      <path
        d="M7916 4328 c-9 -12 -16 -27 -16 -33 0 -5 -23 -54 -50 -108 -28 -54
-50 -100 -50 -103 0 -5 105 -54 115 -54 7 0 113 226 117 250 2 19 -6 28 -41
47 -54 28 -56 28 -75 1z"
      />
      <path
        d="M3084 4007 c-180 -137 -214 -180 -214 -270 0 -67 23 -125 80 -202 47
-63 133 -127 173 -129 26 -1 33 5 53 43 13 24 24 45 24 47 0 2 -15 10 -33 19
-51 24 -126 103 -139 146 -9 31 -8 46 3 76 21 53 41 53 84 -4 56 -75 132 -149
169 -167 43 -20 110 -21 126 -1 7 8 19 15 26 15 8 0 27 19 44 42 40 55 41 121
4 195 -35 69 -82 112 -144 133 l-51 17 26 17 26 17 -42 59 c-23 33 -47 60 -53
60 -7 0 -79 -51 -162 -113z m236 -152 c57 -55 64 -114 17 -149 l-28 -21 -36
20 c-21 11 -56 47 -80 82 l-43 62 28 21 c37 30 102 23 142 -15z"
      />
      <path
        d="M7366 3878 l-178 -232 39 -32 c54 -47 75 -44 120 16 21 28 57 74 81
102 23 29 57 74 75 100 18 26 37 49 44 52 13 6 143 -91 143 -107 0 -5 -15 -28
-33 -51 -80 -98 -167 -216 -167 -225 0 -5 20 -26 45 -47 51 -41 55 -40 101 29
15 23 47 65 69 92 23 28 51 65 64 83 12 17 28 32 35 32 7 0 41 -21 74 -47 l61
-47 -42 -57 c-23 -31 -78 -103 -121 -160 l-79 -103 39 -33 c60 -51 73 -46 152
60 65 85 117 153 215 280 20 27 37 54 37 62 0 7 -35 39 -77 72 -43 33 -176
135 -295 226 -119 92 -219 167 -221 167 -2 0 -84 -104 -181 -232z"
      />
      <path
        d="M3530 3599 c-57 -24 -100 -85 -100 -141 1 -49 30 -105 93 -179 62
-72 79 -117 53 -138 -41 -34 -134 26 -190 122 -15 26 -29 47 -31 47 -1 0 -28
-12 -59 -26 l-56 -26 22 -39 c32 -58 151 -174 206 -201 65 -32 166 -32 205 -1
55 43 72 74 71 129 0 57 -19 92 -92 174 -77 86 -90 140 -34 148 49 7 141 -74
187 -163 22 -44 30 -53 44 -46 9 5 33 16 54 26 20 9 37 23 37 30 0 53 -139
210 -228 258 -58 31 -142 43 -182 26z"
      />
      <path
        d="M7095 3569 c-27 -22 -54 -44 -59 -49 -5 -5 30 -59 80 -124 107 -139
124 -169 124 -219 0 -107 -123 -175 -199 -111 -17 14 -74 82 -126 150 -53 68
-100 124 -106 124 -20 0 -120 -82 -117 -96 2 -7 28 -46 58 -85 192 -251 225
-280 319 -287 48 -3 68 0 107 19 54 27 130 99 139 132 4 12 12 34 18 49 11 25
13 26 29 11 24 -21 57 -11 107 34 l41 38 -175 228 c-97 125 -179 227 -183 227
-4 -1 -29 -19 -57 -41z"
      />
      <path
        d="M3982 3253 c-5 -11 -4 -36 2 -63 l12 -45 59 -5 c110 -9 198 -82 199
-164 1 -39 0 -41 -28 -39 -16 1 -36 8 -45 16 -9 8 -79 47 -156 87 -77 40 -146
78 -153 83 -18 14 -37 -14 -62 -90 -24 -73 -25 -102 -6 -163 14 -44 64 -130
76 -130 4 0 21 -13 39 -30 39 -34 138 -70 196 -70 50 0 136 31 180 64 134 102
155 305 44 430 -70 80 -189 136 -290 136 -45 0 -60 -4 -67 -17z m83 -338 c130
-66 144 -77 125 -100 -19 -23 -65 -45 -94 -45 -34 0 -107 33 -130 59 -21 23
-37 141 -20 141 5 0 59 -25 119 -55z"
      />
      <path
        d="M6429 3145 c-81 -23 -126 -55 -171 -123 -15 -22 -15 -22 -33 -2 -23
26 -31 25 -99 -5 -60 -26 -61 -30 -27 -92 5 -10 14 -31 20 -48 5 -16 32 -84
59 -150 27 -66 80 -194 116 -285 37 -91 74 -171 81 -179 12 -12 23 -11 80 14
63 27 66 29 60 56 -4 16 -22 64 -40 107 -56 132 -59 122 32 122 97 0 162 29
223 97 84 96 87 252 6 370 -70 103 -194 150 -307 118z m143 -182 c64 -62 77
-176 27 -230 -29 -30 -90 -63 -119 -63 -32 0 -89 27 -111 52 -28 32 -59 105
-59 136 0 46 41 105 90 130 64 33 121 25 172 -25z"
      />
      <path
        d="M4649 2956 c-91 -32 -154 -93 -201 -191 -25 -54 -28 -74 -29 -156 0
-52 3 -108 7 -124 10 -43 70 -130 113 -165 55 -46 152 -90 197 -90 22 0 44 -4
50 -10 16 -16 274 -66 297 -57 8 3 17 18 20 34 3 15 18 89 32 163 15 74 31
150 37 168 5 19 16 68 24 110 14 82 37 189 49 235 6 24 5 27 -18 27 -14 0 -37
4 -51 10 -14 5 -81 21 -148 35 -139 28 -316 34 -379 11z m295 -135 c17 -5 47
-14 66 -19 29 -7 35 -12 32 -33 -8 -64 -22 -143 -42 -234 -13 -55 -28 -125
-34 -155 l-11 -55 -35 3 c-57 6 -176 39 -217 61 -52 28 -65 40 -92 86 -20 34
-24 53 -24 122 1 78 3 86 35 130 37 52 98 99 138 107 35 6 146 -2 184 -13z"
      />
      <path
        d="M5601 2927 c-14 -6 -34 -27 -44 -45 -17 -29 -18 -39 -8 -73 15 -49
51 -74 105 -73 31 1 46 8 68 33 40 45 38 93 -6 137 -37 37 -72 43 -115 21z"
      />
    </g>
  </svg>
);
