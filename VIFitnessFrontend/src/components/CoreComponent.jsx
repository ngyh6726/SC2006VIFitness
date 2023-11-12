import React, { useState } from 'react';
import Core from "./styles/photos/Core.jpg";
import Abs from "./styles/photos/Abs.png";
import LowerBack from "./styles/photos/Lower Back.jpeg";
import Oblique from "./styles/photos/Obliques.png";
import MuscleCard from './MuscleCard';
import { Link } from 'react-router-dom';

function CoreComponent() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="flex">
                <div className={`sticky sticky-container top-0 flex-none w-1/3 h-screen ${isHovered ? 'hover-return' : ''}`}
                    onMouseOver={() => setIsHovered(true)}
                    onMouseOut={() => setIsHovered(false)}
                >
                    <Link to="/user/workout-planner">
                        <img src={Core} className="h-screen w-full object-cover"
                            alt="Workout Planner" />
                        {isHovered && <p className="text-white text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Return</p>}
                    </Link>
                </div>
                <div className="flex-grow px-24 pt-10 pb-10">
                    <div className="grid grid-cols-2 grid-rows-3 gap-x-24 gap-y-20 overflow-y-auto">

                        {/* Card 1 */}
                        <div className="flex justify-center">
                            <MuscleCard
                                img={Abs}
                                title="Abdominals"
                                description=""
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="flex justify-center">
                            <MuscleCard
                                img={LowerBack}
                                title="Lower_Back"
                                description=""
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CoreComponent;