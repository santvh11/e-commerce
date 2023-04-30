import { Button } from "@nextui-org/react"
import Link from "next/link"
import { SVGProps } from "react"

export const Logo = ({ color = "#fff" }) => (
    <Link href="/" style={{
        backgroundColor: 'red',
    }}>

        <svg
            style={{
                height: "66",
                width: "373",
                backgroundColor: 'red',
                transform: "scale(0.5)",
                zIndex: 0,
                cursor: "pointer",
            }}
        >
            <path
                xmlns="http://www.w3.org/2000/svg"
                d="M0 26.333c0 3.77 2.587 6.911 6.077 7.817v26.618H2.026a2.027 2.027 0 0 0 0 4.051h60.768c1.123 0 2.025-.906 2.025-2.025s-.902-2.026-2.025-2.026h-4.052V34.15c3.49-.906 6.077-4.047 6.077-7.817v-2.026H0v2.026zm40.512 8.102a8.1 8.1 0 0 0 8.102-8.102c0 3.77 2.588 6.911 6.077 7.817v26.618H24.307V34.435a8.1 8.1 0 0 0 8.103-8.102 8.105 8.105 0 0 0 8.102 8.102zm-18.23-.285v26.618H10.128V34.15c3.49-.906 6.077-4.047 6.077-7.817 0 3.77 2.587 6.911 6.077 7.817zM56.717 6.077H8.102L0 22.282h64.82L56.716 6.077zm-39.602 4.502-4.051 8.103a1.022 1.022 0 0 1-.91.561.98.98 0 0 1-.451-.106 1.01 1.01 0 0 1-.452-1.357l4.052-8.103c.253-.498.858-.7 1.357-.455.502.25.7.859.455 1.357zm8.102 0-4.051 8.103a1.022 1.022 0 0 1-.91.561.98.98 0 0 1-.451-.106 1.01 1.01 0 0 1-.451-1.357l4.051-8.103a1.02 1.02 0 0 1 1.357-.455c.503.25.7.859.455 1.357zm8.205 7.651a1.012 1.012 0 1 1-2.026 0v-8.102a1.012 1.012 0 1 1 2.026 0v8.102zm11.632.887a1.007 1.007 0 0 1-1.377-.4l-4.431-8.102a1.01 1.01 0 0 1 .404-1.373 1.013 1.013 0 0 1 1.376.4l4.431 8.102c.261.49.087 1.108-.403 1.373zm8.063.02a.947.947 0 0 1-.451.106 1.001 1.001 0 0 1-.902-.562l-4.052-8.102a1.01 1.01 0 0 1 .451-1.357 1.019 1.019 0 0 1 1.361.455l4.052 8.102a1.012 1.012 0 0 1-.46 1.357zm-35.9 29.786v-4.668c-.593-.356-1.012-.974-1.012-1.717 0-1.12.91-2.026 2.025-2.026 1.124 0 2.026.906 2.026 2.026 0 .743-.415 1.36-1.013 1.717v4.668c.598.356 1.013.973 1.013 1.717a2.027 2.027 0 0 1-4.051 0c0-.744.42-1.36 1.013-1.717zM8.103 2.026C8.102.906 9.012 0 10.128 0h44.563c1.124 0 2.026.906 2.026 2.026S55.815 4.05 54.69 4.05H10.128a2.027 2.027 0 0 1-2.026-2.025zm27.401 43.253-1.432-1.432 5.729-5.729 1.432 1.433-5.729 5.728zm0 5.729-1.432-1.432L45.53 38.118l1.432 1.433-11.458 11.457zm10.026-7.16 1.432 1.431-5.729 5.73-1.432-1.433 5.729-5.729z"
                fill="#fff"
            />
            <path
                d="M93.662 13v32.11h19.2v7.282H85V13h8.662zm36.358 10.096c8.312.036 12.47 2.74 12.47 8.11v15.117c0 2.795.33 4.82.992 6.07h-7.944a11.47 11.47 0 0 1-.552-2.76c-2.317 2.354-5.517 3.532-9.6 3.532-2.98 0-5.343-.753-7.09-2.262s-2.62-3.606-2.62-6.29c0-2.612.827-4.635 2.482-6.069 1.691-1.509 4.764-2.463 9.214-2.869 3.164-.331 5.167-.745 6.014-1.241s1.269-1.261 1.269-2.29c0-1.288-.386-2.243-1.159-2.869s-2.06-.938-3.862-.938c-1.655 0-2.905.34-3.752 1.02s-1.343 1.775-1.49 3.284h-7.834c.185-3.126 1.47-5.498 3.862-7.118s5.592-2.427 9.6-2.427zm-6.51 21.186c0 2.427 1.6 3.641 4.8 3.641 4.193-.036 6.309-2.187 6.345-6.455v-3.034c-.626.626-2.207 1.084-4.745 1.379-2.207.256-3.826.709-4.855 1.352s-1.545 1.682-1.545 3.117zm70.4-31.283v7.283h-11.807v32.11h-8.662v-32.11h-11.807v-7.283h32.276zm11.751 0v6.455h-7.834V13h7.834zm0 10.87v28.523h-7.834V23.868h7.834zm19.366-.773c2.684 0 5.076.626 7.172 1.876s3.744 3.062 4.938 5.434 1.793 5.104 1.793 8.193c0 .295-.019.773-.055 1.435h-20.58c.075 2.281.671 4.055 1.794 5.324s2.841 1.903 5.159 1.903c1.434 0 2.75-.358 3.944-1.076s1.959-1.591 2.29-2.62h6.897c-2.022 6.4-6.475 9.6-13.352 9.6-2.612-.036-5.029-.607-7.255-1.71s-4-2.823-5.324-5.16-1.987-5.048-1.987-8.137c0-2.905.67-5.553 2.014-7.945s3.126-4.174 5.352-5.352 4.626-1.765 7.2-1.765zm6.014 11.972c-.367-2.132-1.049-3.677-2.042-4.634s-2.408-1.435-4.248-1.435c-1.912 0-3.42.544-4.524 1.628s-1.746 2.565-1.931 4.441h12.745zm28.855-11.972c3.641 0 6.281.918 7.917 2.758s2.455 4.764 2.455 8.773v17.765h-7.834V36.227c0-2.353-.378-4.102-1.131-5.242s-2.05-1.71-3.89-1.71c-2.132 0-3.677.643-4.634 1.931s-1.435 3.401-1.435 6.345v14.841h-7.834V23.868h7.448v3.973h.165c1.95-3.165 4.875-4.745 8.773-4.745zm44.138-10.097v39.393h-7.449v-3.641h-.11c-1.691 2.943-4.58 4.414-8.662 4.414-3.937 0-7.054-1.435-9.352-4.304s-3.448-6.53-3.448-10.98c0-4.338 1.167-7.889 3.503-10.647s5.38-4.138 9.131-4.138c1.73 0 3.358.358 4.883 1.076s2.712 1.773 3.559 3.172h.11V12.999h7.835zm-21.187 25.104c0 2.612.616 4.791 1.849 6.538s2.916 2.62 5.048 2.62c2.243 0 3.925-.82 5.048-2.455s1.683-3.89 1.683-6.759-.588-5.095-1.766-6.675-2.85-2.373-5.02-2.373c-2.243 0-3.945.828-5.104 2.483s-1.738 3.862-1.738 6.62zm35.145-25.104v6.455h-7.834V13h7.834zm0 10.87v28.523h-7.834V23.868h7.834zm16.11-8.553v8.552h5.738v5.242h-5.738v14.124c0 1.324.221 2.207.662 2.648s1.325.662 2.649.662c.957 0 1.765-.075 2.427-.22v6.123c-1.103.185-2.648.276-4.634.276-3.015 0-5.26-.516-6.731-1.545s-2.207-2.813-2.207-5.351V29.11h-4.745v-5.242h4.745v-8.552h7.834zm22.621 7.78c8.312.036 12.469 2.74 12.469 8.11v15.117c0 2.795.33 4.82.993 6.07h-7.945a11.47 11.47 0 0 1-.552-2.76c-2.317 2.354-5.517 3.532-9.6 3.532-2.979 0-5.343-.753-7.09-2.262s-2.62-3.606-2.62-6.29c0-2.612.828-4.635 2.483-6.069 1.691-1.509 4.764-2.463 9.214-2.869 3.164-.331 5.167-.745 6.013-1.241s1.27-1.261 1.27-2.29c0-1.288-.387-2.243-1.16-2.869s-2.06-.938-3.861-.938c-1.655 0-2.905.34-3.752 1.02s-1.343 1.775-1.49 3.284h-7.834c.185-3.126 1.47-5.498 3.862-7.118s5.592-2.427 9.6-2.427zm-6.51 21.186c0 2.427 1.6 3.641 4.8 3.641 4.193-.036 6.309-2.187 6.344-6.455v-3.034c-.626.626-2.206 1.084-4.744 1.379-2.207.256-3.827.709-4.856 1.352s-1.544 1.682-1.544 3.117z"
                fill="#fff"
            />
        </svg>
    </Link>
)