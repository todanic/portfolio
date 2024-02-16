import React, { Suspense } from "react"
import Lottie from "lottie-react";

export default function LottieImage({ animationData }) {
    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData
    };

    return (
        <Suspense>
            <Lottie
                animationData={animationData}
                loop={options.loop}
            />
        </Suspense>
    )
}
